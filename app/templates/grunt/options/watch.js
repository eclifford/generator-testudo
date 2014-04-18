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
    cwd: nconf.get('app:basePath'),
    livereload: nconf.get('server:livereload'),
    livereloadOnError: false
  },
  
  stylus: {
    files: ['assets/{,*/}/', 'assets/**/*.styl', 'modules/{,*/}/', 'modules/**/*.styl', '*.styl'],
    tasks: ['stylus:dev']
  },
  
  js: {
    files: ['modules/{,*/}/', 'modules/**/*.js'],
    tasks: nconf.get('app').linting ? ['newer:jshint:js', 'karma:unit:run'] : ['karma:unit:run'] 
  },
  assets: {
    files: ['modules/{,*/}/', 'modules/**/*.{html,tmpl}'],
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
