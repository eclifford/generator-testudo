#
# Build task
# Build deployment artifacts
#
# @author Eric Clifford
#
module.exports = (grunt) ->
  grunt.registerTask 'build', [
    'clean:dist' 
    'concurrent:dev'
    'symlink'
    'requirejs'
  ]

