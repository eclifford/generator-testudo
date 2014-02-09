(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules/instagram/models/photoModel'], function(Backbone, PhotoModel) {
    var PhotosCollection;
    return PhotosCollection = (function(_super) {
      __extends(PhotosCollection, _super);

      function PhotosCollection() {
        return PhotosCollection.__super__.constructor.apply(this, arguments);
      }

      PhotosCollection.prototype.model = PhotoModel;

      PhotosCollection.prototype.url = 'https://api.instagram.com/v1/media/search?callback=?';

      PhotosCollection.prototype.parse = function(response) {
        return response.data;
      };

      return PhotosCollection;

    })(Backbone.Collection);
  });

}).call(this);
