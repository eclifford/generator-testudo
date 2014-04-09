var nconf = require('nconf');

module.exports = function() {
  // Highest priority command line arguments and ENV variables
  nconf.argv().env({seperator: '__'});

  // Next highest priority ENV specific settings
  nconf.file('global', {file: './config/' + process.env.NODE_ENV + '.json'});

  // Third highest priorty user settings
  nconf.file('user', {file: './config/user.json'});

  // Defaults
  nconf.file({file: './config/defaults.json'});

  // Copy over settings 'env' to node env variables
  for(var k in nconf.get('env')) {
    process.env[k] = nconf.get('env')[k];
  }

  return nconf;
}
