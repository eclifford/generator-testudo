#
# grunt-contrib-coffee
# https://github.com/gruntjs/grunt-contrib-coffee
#
# @author Eric Clifford
#
module.exports = 
  dev:
    expand: true
    cwd: "<%= options.basePath %>"
    src: ["**/*.coffee", "!**/vendor/**/*.coffee"]
    dest: "<%= options.tempDir %>"
    ext: ".js"