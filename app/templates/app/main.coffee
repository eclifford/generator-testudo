#
# App Main - The entry point into the application
#
# @author {%= author_name %}
#
require ['common'], (common) ->
  require [
    'jquery'
    'bronson'
  ], ($, Bronson) ->

    Bronson.load
      id: 'todos'
      path: 'modules/todos/main'
