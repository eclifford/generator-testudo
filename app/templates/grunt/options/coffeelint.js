//
// CoffeeLint Task
// 
// The CoffeeLint task 'lints' each CoffeeScript file and attemps to 
// catch common errors before invoking the CoffeeScript task. This 
// task is optional and can be configured in the user settings.
//
// More Information
// - http://www.coffeelint.org
// - http://www.coffeelint.org/#options
// - https://github.com/vojtajina/grunt-coffeelint
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    configFile: '.coffeelint'
  },
  dev: {
    files: {
      src: ["" + (nconf.get('app:basePath')) + "/**/*.coffee"].concat(nconf.get('app:ignoredDirs'))
    }
  }
};
