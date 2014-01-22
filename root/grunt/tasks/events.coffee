#
# Events
# 
# The events object works in conjuction with the watcher and intercepts file
# change notifications and during runtime alters the configuration of the 
# compilation tasks to enable single file compilation.
# 
# @author Eric Clifford
#
# TODO: When grunt-contrib-watch supports it handle file/folder deletes 
# properly.
#
nconf = require('nconf')

module.exports = (grunt) ->
  grunt.event.on "watch", (action, filepath, target) ->
    switch target
      # Compile only the files that have changed
      when "assets"
        if action isnt "deleted"
          grunt.config ["copy", "assets", "src"], filepath.replace(grunt.config.get('copy.assets.cwd') + '/', '')
        else
          grunt.file.delete filepath.replace(nconf.get('app').basePath, nconf.get('app').tempDir)
      when "coffee"
        if action isnt "deleted"
          if !grunt.file.isDir(filepath)
            grunt.config ["coffeelint", "dev"], [filepath]
            grunt.config ["coffee", "dev", "src"], filepath.replace(grunt.config.get('coffee.dev.cwd') + '/', '')
          else
            grunt.config ["coffee", "dev", "src"], '!skip'
        else
          grunt.file.delete filepath.replace('.coffee', '.js').replace(nconf.get('app').basePath, nconf.get('app').tempDir)
