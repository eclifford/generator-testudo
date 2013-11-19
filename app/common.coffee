#
# Set RequireJS common aliases and shims
#
# @author Eric Clifford
#
require.config
  baseUrl: './'

  paths:
    bronson: "vendor/bower_components/bronson/bronson"
    vendor: "vendor/bower_components/"
    bootstrap: "vendor/bower_components/sass-bootstrap/js/"
    jquery: "vendor/bower_components/jquery/jquery"
    libs: "scripts/libs"

  shim:
    bootstrap:
      deps: ["jquery"]



