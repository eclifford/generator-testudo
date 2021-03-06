//
// App Main - The entry point into the application
//
// @author {%= author_name %}
//
require(['config'], function(common) {
  return require([
    'jquery', 
    'bronson'
  ], function($, Bronson) {
    Bronson.load({
      id: 'todos',
      path: 'modules/todos/main'
    });
  });
});
