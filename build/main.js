(function() {
  require(['common'], function(common) {
    return require(['jquery', 'bronson'], function($, Bronson) {
      Bronson.load({
        id: 'instagram',
        path: 'modules/instagram/main',
        data: {
          el: '#instagram'
        },
        options: {
          autostart: true
        }
      });
      return Bronson.load({
        id: 'gmaps',
        path: 'modules/gmaps/main',
        data: {
          el: '#maps'
        },
        options: {
          autostart: false
        }
      });
    });
  });

}).call(this);
