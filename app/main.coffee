#
# App Main - The entry point into the application
#
# @author Eric Clifford
#
require ['common'], (common) ->
  require [
    'bronson'
    'jquery'
    'plugins/jquery.nav'
  ], (Bronson, $) ->
    "use strict"

    $('.nav').onePageNav
      scrollOffset: 350

    Bronson.load [
      'modules/instagram/main':
        autostart: true
        data:
          el: '#instagram .module-content'
    ]

    Bronson.load [
      'modules/gmaps/main':
        autostart: false
        data:
          el: '#maps'
    ]
