#
# grunt-contrib-clean
# https://github.com/gruntjs/grunt-contrib-clean
#
# @author Eric Clifford
#
module.exports =
  options:
    force: true # watch yourself there be dragons

  dist: [
    "<%= options.tempDir %>",
    "<%= options.buildDir %>"
  ]
  server: [
    "<%= options.tempDir %>"
  ]