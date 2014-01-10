#
# grunt-contrib-sass
# https://github.com/gruntjs/grunt-contrib-sass
#
module.exports = (grunt) ->
  dev:
    expand: true
    cwd: "<%= grunt.settings.paths.basePath %>"
    src: ["**/*.{scss,sass}", "!**/vendor/**/*.{scss,sass}"]
    dest: "<%= grunt.settings.paths.tempDir %>"
    ext: ".css"