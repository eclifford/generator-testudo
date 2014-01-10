#
# grunt-contrib-requirejs
# https://github.com/gruntjs/grunt-contrib-requirejs
#
module.exports = (grunt) ->
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
      modules: [
        name: 'main'
      {% if (include_demo_files) { %}
      ,
        name: 'modules/instagram/main'
        exclude: ['main']
      ,
        name: 'modules/gmaps/main'
        exclude: ['main']
      ]
      {% } %}
