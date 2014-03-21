'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the module subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    var moduleName = this._.classify(this.name);
    this.mkdir('app/modules/' + moduleName);
    this.template('module.coffee', 'app/modules/' + moduleName + '/main.coffee');
    this.template('module.styl', 'app/modules/' + moduleName + '/main.styl');
  }
});

module.exports = ModuleGenerator;
