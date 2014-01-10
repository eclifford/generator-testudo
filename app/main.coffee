#
# App Main - The entry point into the application
#
require ['common'], (common) ->
  require [
    'jquery'
    'bronson'
  ], ($, Bronson) ->

    # Load instagram module
    Bronson.load
      id: 'instagram'
      path: 'modules/instagram/main'
      data:
        el: '#instagram'
      options:
        autostart: true

    Bronson.load
      id: 'gmaps'
      path: 'modules/gmaps/main'
      data:
        el: '#maps'
      options:
        autostart: false
