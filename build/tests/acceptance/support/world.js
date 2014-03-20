(function() {
  var World, chai, chaiAsPromised, nconf, remote, wd;

  wd = require('wd');

  chai = require('chai');

  nconf = require('nconf');

  chaiAsPromised = require("chai-as-promised");

  remote = wd.promiseChainRemote(process.env.SELENIUM_HUB);

  chai.use(chaiAsPromised);

  chai.should();

  chaiAsPromised.transferPromiseness = wd.transferPromiseness;

  World = World = function(callback) {
    this.browser = remote;
    this.browser.on("status", function(info) {
      return console.log(info.cyan);
    });
    this.browser.on("command", function(meth, path, data) {
      return console.log(" > " + meth.yellow, path.grey, data || "");
    });
    return this.browser.init({
      browserName: 'firefox'
    }).nodeify(callback);
  };

  exports.World = World;

}).call(this);
