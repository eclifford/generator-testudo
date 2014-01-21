# Testudo Gruntfile
# @author Eric Clifford
#

# Load ENV variables
require('dotenv').load()

# Dynamically build Grunt configuration from external files
# credit http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
loadConfig = (path, grunt) ->
  glob = require("glob")
  object = {}
  key = undefined
  glob.sync("*",
    cwd: path
  ).forEach (option) ->
    key = option.replace(/\.coffee$/, "")
    object[key] = require(path + option)

  object

module.exports = (grunt) ->

  # Load task configurations with overrides
  config = grunt.util._.extend {}
  , loadConfig('./grunt/options/')

  # Initialize Grunt
  grunt.initConfig(config)

  # Load Grunt tasks
  require('load-grunt-tasks')(grunt)

  grunt.loadTasks('./grunt/tasks/');
