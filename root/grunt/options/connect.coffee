#
# Connect Task
# 
# The connect task launches a configurable node connect standalone
# server with optional livereload and auto 'open' both of which are 
# configurable in the user options.
#
# More information
# - https://github.com/gruntjs/grunt-contrib-connect
# 
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  options:
    port: nconf.get('server').port
    livereload: nconf.get('server').livereload
    hostname: nconf.get('server').hostname

  dev:
    options:
      open: nconf.get('server').open
      base: [
        nconf.get('app').tempDir,
        nconf.get('app').basePath
      ]

  dist:
    options:
      open: nconf.get('server').open
      base: nconf.get('app').buildDir 
