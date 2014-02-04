#
# Set RequireJS common aliases and shims
#
# @author {%= author_name %}
#
require.config
  baseUrl: '/'

  paths:
    # Aliases
    'bootstrap': 'vendor/bower_components/sass-bootstrap/js/'
    'tpl': 'vendor/bower_components/requirejs-tpl/tpl'

    # Libs
    'jquery': 'vendor/bower_components/jquery/jquery'

    {% if (include_backbone) { %}'underscore': 'vendor/bower_components/underscore-amd/underscore'
    'backbone': 'vendor/bower_components/backbone-amd/backbone'{% } %}
    {% if (include_marionette) { %}'backbone.wreqr': 'vendor/bower_components/backbone.wreqr/lib/amd/backbone.wreqr'
    'backbone.babysitter': 'vendor/bower_components/backbone.babysitter/lib/amd/backbone.babysitter'
    'marionette': 'vendor/bower_components/marionette/lib/core/amd/backbone.marionette'{% } %}
    {% if (include_bronson) { %}'bronson': 'vendor/bower_components/bronson/bronson'{% } %}

  shim:
    'bootstrap':
      deps: ["jquery"]


