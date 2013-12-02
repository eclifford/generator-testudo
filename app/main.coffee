#
# App Main - The entry point into the application
#
require ['common'], (common) ->
  require [
    'jquery'
    'bronson'
  ], ($, Bronson) ->

    # Load instagram module
    Bronson.load [
      'modules/instagram/main':
        autostart: true
        data:
          el: '#instagram'
    ,
      'modules/gmaps/main':
        autostart: false
        data:
          el: '#maps'
    ]
