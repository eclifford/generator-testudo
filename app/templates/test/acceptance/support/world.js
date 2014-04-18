var wd = require('wd');
var chai = require('chai');
var nconf = require('../../../config/manager')();
var chaiAsPromised = require("chai-as-promised");
var remote = wd.promiseChainRemote(process.env.SELENIUM_HUB);

require('colors');

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var World = function(callback) {
  this.browser = remote;
  if (nconf.get('testing:acceptance:logging')) {
    this.browser.on("status", function(info) {
      return console.log(info.cyan);
    });
    this.browser.on("command", function(meth, path, data) {
      return console.log(" > " + meth.yellow, path.grey, data || "");
    });
  }
  return this.browser.init({
    browserName: nconf.get('testing:acceptance:browser')
  }).nodeify(callback);
};

exports.World = World;
