#
# Server Task
# 
# Start a server without starting watchers or compiling
# 
# @author Eric Clifford
#
module.exports = (grunt, target) ->
  grunt.registerTask "server", (target) ->
    if target is "dist"
      grunt.task.run([
        "build", 
        "connect:dist:keepalive"
      ]) 
    else 
      grunt.task.run [
        "clean:dev", 
        "concurrent:dev", 
        "includereplace",
         "connect:dev"
       ]
