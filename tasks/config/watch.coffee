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
    livereload: '<%= connect.options.livereload %>'

  coffee:
    files: ['**/*.coffee', '!vendor/**/*']
    tasks: ['coffeelint', 'coffee:dev', 'karma:unit:run']

  sass:
    files: ['<%= options.basePath %>/**/*.{scss,sass}', '!vendor/**/*'],
    tasks: ['sass:dev']
