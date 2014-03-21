#
# RequireJS Task
# 
# This task configures the R.JS build properties and automatically
# globs modules in the 'modules/' directory to populate the R.JS 
# modules.
#
# More information
# - https://github.com/gruntjs/grunt-contrib-requirejs
# - https://github.com/jrburke/r.js/blob/master/build/example.build.js
# 
# @author Eric Clifford
#
glob = require 'glob'
nconf = require('nconf')

# Setup modules array with default main module
modules = [
  name: 'main'
]

# Find all modules and add them to the r.js module defintions
glob.sync("modules/**/main.coffee",
  cwd: nconf.get('app').basePath
).forEach (option) ->
  modules.push
    name: option.replace('.coffee', '')
    exclude: ['main']

module.exports = 
  # Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
  dist:
    options:
      baseUrl: nconf.get('app').tempDir
      mainConfigFile: "#{nconf.get('app').tempDir}/common.js"
      fileExclusionRegExp: new RegExp("tests/*")
      dir: nconf.get('app').buildDir
      skipDirOptimize: true
      optimizeCss: 'none'
      removeCombined: false
      preserveLicenseComments: false
      useStrict: true
      optimize: "uglify2"
      findNestedDependencies: true
      wrap: true

      # AMD Modules
      modules: modules
