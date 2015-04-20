(function() {
  var $, PJSDateEditor, PJSEditor, _, moment,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  _ = require("lodash");

  $ = require("jquery");

  moment = require("moment");

  PJSEditor = require("../editor");

  module.exports = PJSDateEditor = (function(superClass) {
    extend(PJSDateEditor, superClass);

    function PJSDateEditor() {
      return PJSDateEditor.__super__.constructor.apply(this, arguments);
    }

    PJSDateEditor.prototype.baseFormat = "YYYY-MM-DD";

    PJSDateEditor.prototype.createInput = function() {
      this.input = $("<input/>").attr("type", this.settings.type);
      if (this.settings.placeHolder != null) {
        this.input.attr("placeholder", this.settings.placeHolder);
      }
      if (this.settings.required === true) {
        this.input.attr("required", "required");
      }
      this.input.on("change", (function(_this) {
        return function() {
          return _this.valueChanged(_this.getInputValue());
        };
      })(this));
      return this.input;
    };

    PJSDateEditor.prototype.getInputValue = function() {
      return this.getMomentValue().format(this.settings.format);
    };

    PJSDateEditor.prototype.getMomentValue = function() {
      return moment(this.input.val(), this.baseFormat);
    };

    PJSDateEditor.prototype.setInputValue = function(newValue) {
      PJSDateEditor.__super__.setInputValue.call(this, newValue);
      return this.input.val(moment(newValue, this.settings.format).format(this.baseFormat));
    };

    return PJSDateEditor;

  })(PJSEditor);

}).call(this);