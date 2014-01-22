#
# Test task
# 
# Test task with targets for starting unit or acceptance test
# 
# @author Eric Clifford
#
module.exports = (grunt) ->
  grunt.registerTask 'test', (target) ->
    if target is 'unit'
      grunt.task.run(['karma:unit'])
    else if target is 'acceptance'
      grunt.config ["connect", "dev", "options", "open"], false
      grunt.task.run([
        'selenium-launch', 
        'connect:dev', 
        'cucumberjs'
      ])
