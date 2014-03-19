#
# Testudo Gruntfile
#
# @author Eric Clifford
#

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
  # Read in ENV from command line --environment
  process.env.NODE_ENV = grunt.option('environment') || 'development'

  # Load environment specific configuration
  require('./config/manager')()

  # Load task configurations with overrides
  config = grunt.util._.extend {}
  , loadConfig('./grunt/options/')

  # Initialize Grunt
  grunt.initConfig(config)

  # Load Grunt tasks
  require('load-grunt-tasks')(grunt)

  grunt.loadTasks('./grunt/tasks/')
