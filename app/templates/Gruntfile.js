//
// Testudo Gruntfile
//
// @author Eric Clifford
//

// Dynamically build Grunt configuration from external files
// credit http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
var nconf = require('nconf');

var loadConfig = function(path, grunt) {
  var glob, key, object;
  glob = require("glob");
  object = {};
  key = void 0;
  glob.sync("*", {
    cwd: path
  }).forEach(function(option) {
    key = option.replace(/\.js/, "");
    return object[key] = require(path + option);
  });
  return object;
};

module.exports = function(grunt) {
  var config;
  // Read in ENV from command line --environment
  process.env.NODE_ENV = grunt.option('environment') || 'development';

  // Load environment specific configuration
  nconf.argv().env();

  // Next highest priority ENV specific settings 
  nconf.file('global', {file: "./config/#{process.env.NODE_ENV}.json"});

  // Third highest priority user settings 
  nconf.file('user', {file: './config/user.json'});

  // Defaults
  nconf.file({file: './config/defaults.json'});

  // Copy over settings in 'env' to node environment variables
  for(var k in nconf.get('env')) {
    process.env[k] = nconf.get('env')[k];
  }

  // Load task configurations with overrides
  config = grunt.util._.extend({}, loadConfig('./grunt/options/'));

  // Initialize grunt
  grunt.initConfig(config);

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);
  return grunt.loadTasks('./grunt/tasks/');
};
