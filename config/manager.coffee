#
# Config Manager
# 
# The configuration manager is used to read configuration
# parameters for multiple sources (argv, env, file) and 
# aggregate them in nconf (https://github.com/flatiron/nconf).
# 
# In addition those properties stored in 'env' are also stored
# as node env variables.
#
# @author Eric Clifford
#
nconf = require('nconf')

module.exports = ->
  # Highest priority command line arguments and ENV variables
  nconf.argv().env()

  # Next highest priority ENV specific settings 
  nconf.file('global', {file: "./config/#{process.env.NODE_ENV}.json"})

  # Third highest priority user settings 
  nconf.file('user', {file: './config/user.json'})

  # Defaults
  nconf.file({file: './config/defaults.json'})

  # Copy over settings in 'env' to node environment variables
  for k, v of nconf.get('env')
    process.env[k] = v

  return nconf
