#
# App Main - The entry point into the application
#
# @author Eric Clifford
#
require ['common'], (common) ->
  require ['bronson'], (Bronson) ->
    "use strict"

    Bronson.load [
      'modules/moduleA/main':
        autostart: true
        data:
          el: '#content'
    ]
