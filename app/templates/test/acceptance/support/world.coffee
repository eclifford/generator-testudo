wd = require('wd')
chai = require('chai')
require('colors')
nconf = require('../../../config/manager')()
chaiAsPromised = require("chai-as-promised")

remote = wd.promiseChainRemote(process.env.SELENIUM_HUB)
chai.use(chaiAsPromised)
chai.should()

chaiAsPromised.transferPromiseness = wd.transferPromiseness

World = (callback) ->
  @browser = remote

  if nconf.get('testing:acceptance:logging')
    @browser.on "status", (info) ->
      console.log info.cyan

    @browser.on "command", (meth, path, data) ->
      console.log " > " + meth.yellow, path.grey, data or ""

  @browser.init({browserName: nconf.get('testing:acceptance:browser')})
    .nodeify(callback)

exports.World = World
