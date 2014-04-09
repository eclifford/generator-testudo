//
// RequireJS Task
// 
// This task configures the R.JS build properties and automatically
// globs modules in the 'modules/' directory to populate the R.JS 
// modules.
//
// More information
// - https://github.com/gruntjs/grunt-contrib-requirejs
// - https://github.com/jrburke/r.js/blob/master/build/example.build.js
// 
// @author Eric Clifford
//
var glob = require('glob');
var nconf = require('nconf');

// Setup modules array with default main module
var modules = [
  {
    name: 'main'
  }
];

// Find all modules and add them to the r.js module defintions
glob.sync("modules/**/main.{coffee,js}", {
  cwd: nconf.get('app').basePath
}).forEach(function(option) {
  return modules.push({
    name: option.replace('.js', '').replace('.coffee', ''),
    exclude: ['main']
  });
});

module.exports = {
  dist: {
    options: {
      baseUrl: nconf.get('app').tempDir,
      mainConfigFile: "" + (nconf.get('app').tempDir) + "/common.js",
      fileExclusionRegExp: new RegExp("tests/*"),
      dir: nconf.get('app').buildDir,
      skipDirOptimize: true,
      optimizeCss: 'none',
      removeCombined: true,
      preserveLicenseComments: false,
      useStrict: true,
      optimize: "uglify2",
      findNestedDependencies: true,
      wrap: true,
      modules: modules
    }
  }
};
