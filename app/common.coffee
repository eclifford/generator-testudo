#
# Set RequireJS common aliases and shims
#
# @author Eric Clifford
#
require.config
  baseUrl: './'

  paths:
    bronson: "vendor/bower_components/bronson/bronson"
    vendor: "vendor/bower_components"
    bootstrap: "vendor/bower_components/sass-bootstrap/js/"
    jquery: "vendor/bower_components/jquery/jquery"
    underscore: "vendor/bower_components/underscore-amd/underscore"
    backbone: "vendor/bower_components/backbone-amd/backbone"
    libs: "scripts/libs"
    text: "vendor/bower_components/requirejs-text/text"

  shim:
    bootstrap:
      deps: ["jquery"]




