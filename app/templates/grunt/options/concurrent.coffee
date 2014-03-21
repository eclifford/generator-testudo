#
# Concurrent Task
# 
# In an effort to speed up the compilation process we run tasks conrruently
# thanks to the great grunt-concurrent plugin.
#
# More information
# - https://github.com/sindresorhus/grunt-concurrent
#
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = 
  dev: [
    'stylus'
    'coffee'
    'jade'
    'copy:assets'
  ]
