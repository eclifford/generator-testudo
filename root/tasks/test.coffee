#
# Test Task
# Task for firing off unit tests
#
module.exports = (grunt) ->
  grunt.registerTask 'test', (target) ->
    if target is 'unit'
      grunt.task.run(['karma:unit'])
