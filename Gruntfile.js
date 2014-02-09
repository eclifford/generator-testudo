(function() {
  var loadConfig;

  loadConfig = function(path, grunt) {
    var glob, key, object;
    glob = require("glob");
    object = {};
    key = void 0;
    glob.sync("*", {
      cwd: path
    }).forEach(function(option) {
      key = option.replace(/\.coffee$/, "");
      return object[key] = require(path + option);
    });
    return object;
  };

  module.exports = function(grunt) {
    var config;
    process.env.NODE_ENV = grunt.option('environment') || 'development';
    require('./config/manager')();
    config = grunt.util._.extend({}, loadConfig('./grunt/options/'));
    grunt.initConfig(config);
    require('load-grunt-tasks')(grunt);
    return grunt.loadTasks('./grunt/tasks/');
  };

}).call(this);
