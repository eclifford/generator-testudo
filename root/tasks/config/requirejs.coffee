#
# grunt-contrib-requirejs
# https://github.com/gruntjs/grunt-contrib-requirejs
#
glob = require 'glob'

module.exports = (grunt) ->
  # Setup modules array with default main module
  modules = [
    name: 'main'
  ]

  # Find all modules and add them to the r.js module defintions
  glob.sync("modules/**/main.coffee",
    cwd: grunt.settings.paths.basePath
  ).forEach (option) ->
    modules.push
      name: option.replace('.coffee', '')
      exclude: ['main']

  # Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
  dist:
    options:
      # appDir: '<%= grunt.settings.paths.tempDir %>'
      baseUrl: '<%= grunt.settings.paths.tempDir %>'
      mainConfigFile: "<%= grunt.settings.paths.tempDir %>/common.js"
      fileExclusionRegExp: new RegExp("modules/.*/[0-9A-Za-z]*Spec.js")
      dir: "<%= grunt.settings.paths.buildDir %>"
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
