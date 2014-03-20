(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'modules/instagram/collections/photosCollection', 'modules/instagram/views/photosView'], function($, _, Backbone, Marionette, PhotosCollection, PhotosView) {
    var InstagramModule;
    return InstagramModule = (function(_super) {
      __extends(InstagramModule, _super);

      function InstagramModule() {
        return InstagramModule.__super__.constructor.apply(this, arguments);
      }

      InstagramModule.prototype.events = {
        'instagram:stop': 'stop',
        'instagram:start': 'start',
        'map:geoupdate': 'update'
      };

      InstagramModule.prototype.onLoad = function(data) {
        var App;
        this.data = data;
        return App = new Marionette.Application();
      };

      InstagramModule.prototype.onStart = function() {
        this.photos = new PhotosCollection();
        return this.photosGridView = new PhotosView({
          el: this.data.el,
          collection: this.photos
        });
      };

      InstagramModule.prototype.onStop = function() {
        return Bronson.unsubscribe('instagram:map:geoupdate');
      };

      InstagramModule.prototype.onUnload = function() {};

      InstagramModule.prototype.update = function(data) {
        return this.photos.fetch({
          data: {
            client_id: "b3481714257943a4974e4e7ba99eb357",
            lat: data.lat,
            lng: data.lng,
            count: 12
          },
          reset: true,
          success: (function(_this) {
            return function() {
              return _this.photosGridView.render();
            };
          })(this)
        });
      };

      return InstagramModule;

    })(Bronson.Module);
  });

}).call(this);
