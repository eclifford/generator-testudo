#
# grunt-contrib-watch
# https://github.com/gruntjs/grunt-contrib-watch
#
module.exports =
  options:
    spawn: false
    cwd: process.env.GRUNT_BASE_PATH
    livereload: Boolean(process.env.SERVER_LIVERELOAD_ENABLED)

  coffee:
    files: [
      'modules/{,*/}/'
      'modules/**/*.coffee'
      'main.coffee'
    ]
    tasks: if Boolean(process.env.PROJECT_LINTING_ENABLED) then ['coffeelint', 'coffee:dev'] else ['coffee:dev']

  sass:
    files: [
      'modules/{,*/}/'
      'modules/**/*.{scss,sass}'
      'main.{scss,sass}'
    ],
    tasks: ['sass:dev']

  assets:
    files: [
      'pages/{,*/}/'
      'pages/**/*.html'
      'index.html'
    ]
    tasks: ['includereplace']
