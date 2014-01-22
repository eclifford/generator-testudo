#
# CoffeeLint Task
# 
# The CoffeeLint task 'lints' each CoffeeScript file and attemps to 
# catch common errors before invoking the CoffeeScript task. This 
# task is optional and can be configured in the user settings.
#
# More Information
# - http://www.coffeelint.org
# - http://www.coffeelint.org/#options
# - https://github.com/vojtajina/grunt-coffeelint
#
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  # TODO: move the lint configuration options to user settings with reasonable
  # defaults
  options:
    'max_line_length':
      'level': 'ignore'
  dev: [
    "#{nconf.get('app').basePath}/{modules,tests}/**/*.coffee"
  ]
