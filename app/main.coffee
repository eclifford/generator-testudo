#
# App Main - The entry point into the application
#
# @author Eric Clifford
#
require ['common'], (common) ->
  require [
    'bronson'
    'jquery'
    'inview'
  ], (Bronson, $) ->
    "use strict"

    $('#instagram').one 'inview', ->
      Bronson.load [
        'modules/instagram/main':
            autostart: true
            data:
              el: '#instagram .module-content'
      ]


    Bronson.load [
      'modules/gmaps/main':
        autostart: true
        data:
          el: '#maps'
    ]
