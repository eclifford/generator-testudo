#
# SASS Task
# 
# The SASS taks compiles SASS in addition to loading the sass-globbing
# library for module based glob imports. 
#
# More information
# - https://github.com/chriseppstein/sass-globbing
# - https://github.com/gruntjs/grunt-contrib-sass
#
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  dev:
    options:
      require: ['sass-globbing']
    files: [
      expand: true
      cwd: nconf.get('app').basePath
      src: ["**/*.{scss,sass}", "!**/vendor/**/*.{scss,sass}"]
      dest: nconf.get('app').tempDir
      ext: ".css"
    ]
