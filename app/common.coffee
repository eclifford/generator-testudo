#
# Set RequireJS common aliases and shims
#
# @author Eric Clifford
#
require.config
  baseUrl: './'

  paths:
    bronson: "vendor/bower_components/bronson/bronson"
    bootstrap: "vendor/bower_components/sass-bootstrap/js/"
    jquery: "vendor/bower_components/jquery/jquery"
    text: "vendor/bower_components/requirejs-text/text"

  shim:
    bootstrap:
      deps: ["jquery"]
