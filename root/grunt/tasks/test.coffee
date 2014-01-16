#
# Test Task
# Task for firing off unit tests
#
module.exports = (grunt) ->
  grunt.registerTask 'test', (target) ->
    if target is 'unit'
      grunt.task.run(['karma:unit'])
    else if target is 'acceptance'
      grunt.config ["connect", "dev", "options", "open"], false
      grunt.task.run(['selenium-launch', 'connect:dev', 'cucumberjs'])
