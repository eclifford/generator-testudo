(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'bronson', 'vendor/bower_components/gmaps/gmaps'], function($, Bronson) {
    var Gmaps;
    return Gmaps = (function(_super) {
      __extends(Gmaps, _super);

      function Gmaps() {
        return Gmaps.__super__.constructor.apply(this, arguments);
      }

      Gmaps.prototype.events = {
        'instagram:update': 'update',
        'instagram:imageselected': 'centerMap'
      };

      Gmaps.prototype.onLoad = function(data) {
        return this.start();
      };

      Gmaps.prototype.onStart = function() {
        return this.map = new GMaps({
          div: '#maps',
          lat: 37.7749295,
          lng: -122.4194155,
          zoom: 13,
          scrollwheel: false,
          click: function(e) {
            return Bronson.publish('map:geoupdate', {
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            });
          },
          dragend: function(e) {
            return Bronson.publish('map:geoupdate', {
              lat: e.center.ob,
              lng: e.center.pb
            });
          }
        });
      };

      Gmaps.prototype.onStop = function() {};

      Gmaps.prototype.onUnload = function() {
        return Bronson.unsubscribe('map');
      };

      Gmaps.prototype.centerMap = function(data) {
        return this.map.setCenter(data.photo.get('location').latitude, data.photo.get('location').longitude);
      };

      Gmaps.prototype.update = function(data) {
        var markers;
        this.map.removeMarkers();
        markers = [];
        data.markers.forEach(function(item) {
          return markers.push({
            lat: item.get('location').latitude,
            lng: item.get('location').longitude,
            details: {
              id: item.get('id')
            },
            click: function(e) {
              return Bronson.publish('map:markerselected', {
                id: e.details.id
              });
            }
          });
        });
        return this.map.addMarkers(markers);
      };

      return Gmaps;

    })(Bronson.Module);
  });

}).call(this);
