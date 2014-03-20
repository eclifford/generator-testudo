(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'marionette', 'modules/instagram/views/photoView', 'tpl!modules/instagram/templates/photosTemplate.tmpl'], function(_, Backbone, Marionette, PhotoView, PhotosTemplate) {
    var PhotosGridView;
    return PhotosGridView = (function(_super) {
      __extends(PhotosGridView, _super);

      function PhotosGridView() {
        return PhotosGridView.__super__.constructor.apply(this, arguments);
      }

      PhotosGridView.prototype.itemView = PhotoView;

      PhotosGridView.prototype.template = PhotosTemplate;

      PhotosGridView.prototype.itemViewContainer = '.module-content';

      PhotosGridView.prototype.events = {
        'click .glyphicon-stop': 'stop',
        'click .glyphicon-play': 'start'
      };

      PhotosGridView.prototype.stop = function(e) {
        Bronson.publish('instagram:stop');
        $(e.currentTarget).addClass('active');
        return $('.glyphicon-play').removeClass('active');
      };

      PhotosGridView.prototype.start = function(e) {
        Bronson.publish('instagram:start');
        $(e.currentTarget).addClass('active');
        return $('.glyphicon-stop').removeClass('active');
      };

      PhotosGridView.prototype.onRender = function() {
        var $children, i, l, _results;
        Bronson.publish('instagram:update', {
          markers: this.collection
        });
        Bronson.subscribe('instagram:map:markerselected', (function(_this) {
          return function(data) {
            $('.photo-item', _this.$el).removeClass('active');
            return $("#" + data.id).addClass('active');
          };
        })(this));
        $children = this.$el.find('.photo-item');
        i = 0;
        l = $children.length;
        _results = [];
        while (i < l) {
          $children.slice(i, i + 4).wrapAll("<div class='row'></div>");
          _results.push(i += 4);
        }
        return _results;
      };

      return PhotosGridView;

    })(Marionette.CompositeView);
  });

}).call(this);
