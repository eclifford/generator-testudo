#
# App Main - The entry point into the application
#
# @author Eric Clifford
#
require ['common'], (common) ->
  require ['bronson'], (Bronson) ->
    "use strict"

    Bronson.load [
      'modules/gmaps/main':
        autostart: true
        data:
          el: '#maps'
    ]

    Bronson.load [
      'modules/instagram/main':
        autostart: true
        data:
          el: '#photos'
    ]
