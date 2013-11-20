#
# grunt-contrib-watch
# https://github.com/gruntjs/grunt-contrib-watch
#
# @author Eric Clifford
#
module.exports =
  options :
    spawn: false
    debounceDelay: 250

  coffee:
    files: ['**/*.coffee', '!vendor/**/*']
    tasks: ['coffeelint', 'coffee:dev', 'karma:unit:run']

  compass:
    files: ['<%= options.basePath %>/**/*.{scss,sass}', '!vendor/**/*'],
    tasks: ['compass:server']

  livereload:
    options:
      livereload: '<%= connect.options.livereload %>'

    files: [
      '<%= options.basePath %>/*.html'
      '<%= options.tempDir %>/styles/{,*/}*.css'
      '{.tmp,<%= options.basePath %>}/scripts/{,*/}*.js'
      # '<%= options.basePath %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
