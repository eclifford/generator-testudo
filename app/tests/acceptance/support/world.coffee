wd = require('wd')
chai = require('chai')
nconf = require('nconf')
chaiAsPromised = require("chai-as-promised")
remote = wd.promiseChainRemote(process.env.SELENIUM_HUB)
chai.use(chaiAsPromised)
chai.should()

chaiAsPromised.transferPromiseness = wd.transferPromiseness

World = World = (callback) ->
  @browser = remote

  @browser.on "status", (info) ->
    console.log info.cyan

  @browser.on "command", (meth, path, data) ->
    console.log " > " + meth.yellow, path.grey, data or ""

  @browser.init({browserName: 'firefox'})
    .nodeify(callback)

exports.World = World
