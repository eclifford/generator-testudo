#
# Default Task
# Default task for watching, compiling and running tests
#
# @author Eric Clifford
#
module.exports = (grunt) ->
  grunt.registerTask 'default', 
  [
    'symlink'
    'concurrent:server'
    'connect:livereload'
    'karma:unit:start'
    'watch'
  ]

