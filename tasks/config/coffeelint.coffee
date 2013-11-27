#
# grunt-coffeelint
# https://github.com/vojtajina/grunt-coffeelint
#
# @author Eric Clifford
#
module.exports =
  options:
    'max_line_length':
      'level': 'ignore'
  app: [
    '<%= options.basePath %>/**/*.coffee'
  ]
