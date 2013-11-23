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
    'scrollspy'
  ], (Bronson, $) ->
    "use strict"

    $('body').scrollspy
      target: '#navbar'

    # $(document).scroll ->
    #   if $(this).scrollTop() > 300
    #     $('#maps').stop().animate
    #       height: 90
    #     , 100

    Bronson.load [
        'modules/instagram/main':
          autostart: true
          data:
            el: '#photos'
      ]


    # $('#photos').one 'inview', (event, isInView, visiblePartX,
    #  visiblePartY) ->
    #   if isInView
    #     Bronson.load [
    #       'modules/instagram/main':
    #         autostart: true
    #         data:
    #           el: '#photos'
    #     ]

    Bronson.load [
      'modules/gmaps/main':
        autostart: true
        data:
          el: '#maps'
    ]

