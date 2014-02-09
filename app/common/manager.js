nconf = require('nconf');

module.exports = function() { 
  // Highest priority command line arguments and ENV variables
  nconf.argv().env();

  // Next highest priority ENV specific settings 
  nconf.file('global', {file: "./config/#{process.env.NODE_ENV}.json"});

  // Third highest priority user settings 
  nconf.file('user', {file: './config/user.json'});

  // Defaults
  nconf.file({file: './config/defaults.json'});

  // Copy over settings in 'env' to node environment variables
  for(k in nconf.get('env')) {
    process.env[k] = nconf.get('env')[k];
  }
}
