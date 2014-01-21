#
# grunt-coffeelint
# https://github.com/vojtajina/grunt-coffeelint
#
module.exports = 
  options:
    'max_line_length':
      'level': 'ignore'
  dev: [
    "#{process.env.GRUNT_BASE_PATH}/{modules,tests}/**/*.coffee"
  ]
