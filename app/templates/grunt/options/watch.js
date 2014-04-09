//
// Watch Task
//
// The watch task adds file watchers to all compileable artifacts and works proxies
// requests to the appropriate compilation tasks. The watch task also works in
// conjuction with Connect to enable livereloading of files upon compilation.
//
// More information
// - https://github.com/gruntjs/grunt-contrib-watch
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    spawn: false,
    cwd: nconf.get('app').basePath,
    livereload: nconf.get('server').livereload,
    livereloadOnError: false
  },
  <% if(coffee) { %>coffee: {
    files: ['assets/{,*/}/', 'assets/**/*.coffee', 'modules/{,*/}/', 'modules/**/*.coffee', '*.coffee'],
    tasks: nconf.get('app').linting ? ['newer:coffeelint', 'newer:coffee:dev', 'karma:unit:run'] : ['newer:coffee:dev', 'karma:unit:run']
  },<% } %>
  <% if(includeStylus) { %>stylus: {
    files: ['assets/{,*/}/', 'assets/**/*.styl', 'modules/{,*/}/', 'modules/**/*.styl', '*.styl'],
    tasks: ['stylus:dev']
  },<% } %>
  <% if(includeSASS) { %>sass: {
    files: ['assets/{,*/}/', 'assets/**/*.{scss,sass}', 'modules/{,*/}/', 'modules/**/*.{scss,sass}', 'main.{scss,sass}'],
    tasks: ['sass:dev']
  },<% } %>
  js: {
    files: ['modules/{,*/}/', 'modules/**/*.js']<% if(!coffee) { %>,
    tasks: nconf.get('app').linting ? ['newer:jshint:js', 'karma:unit:run'] : ['karma:unit:run'] <% } %>
  },
  tests: {
    files: ['../test/**/*.{js,coffee}'],
    tasks: ['karma:unit:run']
  },
  jade: {
    files: ['pages/{,*/}/', 'pages/**/*.jade', 'index.jade'],
    tasks: ['jade:dev']
  }
};
