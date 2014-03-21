#
# Clean Task
# 
# The clean task is used to delete files and folders.
#
# More information
# - https://github.com/gruntjs/grunt-contrib-clean
# 
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  options:
    force: true # watch yourself there be dragons

  # prepare dist folder for clean build
  dist: [
    nconf.get('app').tempDir
    nconf.get('app').buildDir
  ]

  # prepare dev folder for build
  dev: [
    nconf.get('app').tempDir
  ]
