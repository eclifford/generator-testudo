//
// Coffee Task
// 
// The coffee task is used to compile CoffeeScript
// 
// More information
// - https://github.com/gruntjs/grunt-contrib-coffee
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  dev: {
    expand: true,
    cwd: "app",
    src: ["**/*.coffee", "!vendor/**/*.coffee"],
    dest: ".tmp",
    ext: ".js"
  }
};
