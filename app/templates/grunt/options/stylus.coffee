#
# Stylus Task
# 
# The Copy task moves files that are not compiled into position for 
# builds
#
# More information
# - https://github.com/gruntjs/grunt-contrib-copy
# 
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  dev:
    expand: true
    cwd: nconf.get('app').basePath
    src: [
      '**/*.styl'
      '!{vendor,_*}/**/*'
    ]
    dest: nconf.get('app').tempDir
    ext: '.css'
