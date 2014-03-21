#
# Watch Task
#
# The watch task adds file watchers to all compileable artifacts and works proxies
# requests to the appropriate compilation tasks. The watch task also works in
# conjuction with Connect to enable livereloading of files upon compilation.
#
# More information
# - https://github.com/gruntjs/grunt-contrib-watch
#
# @author Eric Clifford
#
nconf = require('nconf')

module.exports =
  options:
    spawn: false
    cwd: nconf.get('app').basePath
    livereload: nconf.get('server').livereload

  coffee:
    files: [
      'assets/{,*/}/'
      'assets/**/*.coffee'
      'modules/{,*/}/'
      'modules/**/*.coffee'
      'main.coffee'
    ]
    tasks: if nconf.get('app').linting then ['newer:coffeelint', 'newer:coffee:dev'] else ['newer:coffee:dev']

  stylus:
    files: [
      'assets/{,*/}/'
      'assets/**/*.{styl}'
      'modules/{,*/}/'
      'modules/**/*.{styl}'
      'main.{styl}'
    ],
    tasks: ['newer:stylus:dev']

  jade:
    files: [
      'pages/{,*/}/'
      'pages/**/*.jade'
      'index.jade'
    ]
    tasks: ['jade:dev']
