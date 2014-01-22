#
# Build Task
# 
# The build task constructs a production quality build and places 
# it into the configured distribution folder.
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
