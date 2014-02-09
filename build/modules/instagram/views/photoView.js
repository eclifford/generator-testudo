(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'tpl!modules/instagram/templates/photoTemplate.tmpl'], function(Marionette, PhotoTemplate) {
    var PhotoView;
    return PhotoView = (function(_super) {
      __extends(PhotoView, _super);

      function PhotoView() {
        return PhotoView.__super__.constructor.apply(this, arguments);
      }

      PhotoView.prototype.template = PhotoTemplate;

      PhotoView.prototype.className = 'col-sm-3 col-xs-3 photo-item';

      PhotoView.prototype.events = {
        "click": "photoSelected"
      };

      PhotoView.prototype.onRender = function() {
        return this.$el.attr('id', this.model.get('id'));
      };

      PhotoView.prototype.photoSelected = function(e) {
        $('.photo-item').removeClass('active');
        this.$el.addClass('active');
        return Bronson.publish('instagram:imageselected', {
          photo: this.model
        });
      };

      return PhotoView;

    })(Marionette.ItemView);
  });

}).call(this);
