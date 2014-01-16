#
# grunt-contrib-watch
# https://github.com/gruntjs/grunt-contrib-watch
#
module.exports = (grunt) ->
  options :
    spawn: false
    cwd: '<%= grunt.settings.paths.basePath %>'
    livereload: grunt.settings.server.livereload

  coffee:
    files: [
      'modules/{,*/}*.coffee'
      'common.coffee'
      'main.coffee'
    ]
    tasks: if grunt.settings.project.linting then ['coffeelint', 'coffee:dev'] else ['coffee:dev']

  sass:
    files: [
      'modules/{,*/}*.{scss,sass}'
      'main.{scss,sass}'
    ],
    tasks: ['sass:dev']

  assets:
    files: [
      'pages/{,*/}*.html'
      'index.html'
    ]
    tasks: ['includereplace']
