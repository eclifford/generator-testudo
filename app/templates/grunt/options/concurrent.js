//
// Concurrent Task
// 
// In an effort to speed up the compilation process we run tasks conrruently
// thanks to the great grunt-concurrent plugin.
//
// More information
// - https://github.com/sindresorhus/grunt-concurrent
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  dev: [
    <% if(includeStylus) { %>'stylus', <% } %>
    <% if(includeSASS) { %>'sass', <% } %>
    <% if(coffee) { %> 'coffee',<% } %>
    'jade'
  ]
};
