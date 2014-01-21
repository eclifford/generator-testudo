#
# Capture events emitting from watch task and target them so that
# we can compile one file at a time
#
module.exports = (grunt) ->
  grunt.event.on "watch", (action, filepath, target) ->
    switch target
      # Compile only the files that have changed
      when "assets"
        if action isnt "deleted"
          grunt.config ["copy", "assets", "src"], filepath.replace(grunt.config.get('copy.assets.cwd') + '/', '')
        else
          grunt.file.delete filepath.replace(grunt.settings.paths.basePath, grunt.settings.paths.tempDir)
      when "coffee"
        if action isnt "deleted"
          if !grunt.file.isDir(filepath)
            grunt.config ["coffeelint", "dev"], [filepath]
            grunt.config ["coffee", "dev", "src"], filepath.replace(grunt.config.get('coffee.dev.cwd') + '/', '')
          else
            grunt.config ["coffee", "dev", "src"], '!skip'
        else
          grunt.file.delete filepath.replace('.coffee', '.js').replace(grunt.settings.paths.basePath , grunt.settings.paths.tempDir )
