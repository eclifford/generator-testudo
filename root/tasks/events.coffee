#
# Capture events emitting from watch task and target them so that
# we can compile one file at a time
#

fs = require 'fs'

module.exports = (grunt) ->
  grunt.event.on "watch", (action, filepath, target) ->
    isDir = fs.lstatSync(filepath).isDirectory()

    switch target
      # Compile only the files that have changed
      when "assets"
        if isDir
          return false
        if action isnt "deleted"
          grunt.config ["copy", "assets", "src"], filepath.replace(grunt.config.get('copy.assets.cwd') + '/', '')
        else
          grunt.file.delete filepath.replace(grunt.settings.paths.basePath, grunt.settings.paths.tempDir)
      when "coffee"
        if isDir
          return false
        else if action isnt "deleted"
          grunt.config ["coffee", "dev", "src"], filepath.replace(grunt.config.get('coffee.dev.cwd') + '/', '')
        else
          grunt.file.delete filepath.replace('.coffee', '.js').replace(grunt.settings.paths.basePath , grunt.settings.paths.tempDir )
