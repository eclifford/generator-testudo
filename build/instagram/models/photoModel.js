(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var PhotoModel;
    return PhotoModel = (function(_super) {
      __extends(PhotoModel, _super);

      function PhotoModel() {
        return PhotoModel.__super__.constructor.apply(this, arguments);
      }

      return PhotoModel;

    })(Backbone.Model);
  });

}).call(this);
