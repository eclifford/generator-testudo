#
# IncludeReplace Task
# 
# The IncludeReplace task adds HTML partial compilation for files and
# variables without the need for serverside support.
#
# More information
# - https://github.com/alanshaw/grunt-include-replace
# 
# @author Eric Clifford
#
nconf = require('nconf')

module.exports =
  options:
    includesDir: "#{nconf.get('app').basePath}/pages/_partials"
  dev:
    expand: true
    cwd: nconf.get('app').basePath
    src: ['index.html', 'pages/**/*.html']
    dest: nconf.get('app').tempDir
