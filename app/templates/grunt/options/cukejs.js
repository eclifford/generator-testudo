//
// CucumberJS Task
// 
// The CucumberJS task is used to run cuke specs. I've forked this plugin to
// add tagging support therefore it's not using the official plugin listed in
// the NPM registry.
//
// More information
// - https://github.com/cucumber/cucumber-js
// - git://github.com/eclifford/grunt-cucumber-js
// 
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  "default": {
    options: {
      features: "test/acceptance/features",
      steps: "test/acceptance/step_definitions",
      format: "pretty"
    }
  }
};
