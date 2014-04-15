// Karma Task
// 
// The Karma task configures the Karma Runner for running unit tests.
//
// More information
// - https://github.com/karma-runner/karma
// - https://github.com/karma-runner/grunt-karma
// 
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    basePath: './',
    frameworks: ['requirejs', 'chai-sinon', 'chai-jquery', 'chai', 'mocha', 'jquery-2.1.0'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      "**/*.coffee": ["coffee"],
      "app/modules/**/*.{js,coffee}": ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: "test/unit/output/coverage/"
    },
    port: 9877,
    files: [{
      pattern: nconf.get('app:basePath') + '/config.js',
      included: true
    },
    {
      pattern: 'test/unit/specs/**/*.{js,coffee}',
      included: false
    },
    {
      pattern: nconf.get('app:basePath') + '/**/*.{' + nconf.get('app:staticAssets') + '}',
      included: false
    },
    {
      pattern: "test/unit/runner.{js,coffee}"
    }
    ]
  },
  unit: {
    background: true,
    browsers: nconf.get('testing:unit:browsers')
  },
  single: {
    autoWatch: false,
    singleRun: true,
    browsers: nconf.get('testing:unit:browsers')
  }
};
