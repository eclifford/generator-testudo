#
# Set RequireJS common aliases and shims
#
# @author {%= author_name %}
#
require.config
  baseUrl: '/'

  paths:
    # Libs
    'jquery': 'vendor/bower_components/jquery/jquery'
    'bronson': 'vendor/bower_components/bronson/bronson'
    'underscore': 'vendor/bower_components/underscore/underscore'
    'backbone': 'vendor/bower_components/backbone/backbone'
    'backboneLocalstorage': 'vendor/bower_components/backbone.localStorage/backbone.localStorage'
    'text': 'vendor/bower_components/requirejs-text/text'

    shim: 
      backboneLocalstorage: 
        deps: ['backbone']
        exports: 'Store'
