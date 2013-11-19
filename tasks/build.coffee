#
# Build task
# Build deployment artifacts
#
# @author Eric Clifford
#
module.exports = (grunt) ->
  grunt.registerTask 'build', [
    'clean:dist' 
    'compass:dist'
    'coffee' 
    'requirejs'
    'copy'
  ]

