#
# grunt-contrib-requirejs
# https://github.com/gruntjs/grunt-contrib-requirejs
#
glob = require 'glob'

# Setup modules array with default main module
modules = [
  name: 'main'
]

# Find all modules and add them to the r.js module defintions
glob.sync("modules/**/main.coffee",
  cwd: process.env.GRUNT_BASE_PATH
).forEach (option) ->
  modules.push
    name: option.replace('.coffee', '')
    exclude: ['main']

module.exports = 
  # Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
  dist:
    options:
      # appDir: '<%= grunt.settings.paths.tempDir %>'
      baseUrl: process.env.GRUNT_TEMP_PATH
      mainConfigFile: "#{process.env.GRUNT_TEMP_PATH}/common.js"
      fileExclusionRegExp: new RegExp("tests/*")
      dir: process.env.GRUNT_DIST_PATH
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
