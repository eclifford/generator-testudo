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
    'nav'
  ], (Bronson, $) ->
    "use strict"

    $('.nav').onePageNav
      scrollOffset: 350



    Bronson.load [
      'modules/instagram/main':
          autostart: false
          data:
            el: '#instagram .module-content'
    ]

    Bronson.load [
      'modules/carousel/main':
          autostart: false
          data:
            el: '#carousel .module-content'
    ]

    Bronson.load [
      'modules/gmaps/main':
        autostart: true
        data:
          el: '#maps'
    ]
