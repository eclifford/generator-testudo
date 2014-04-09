module.exports = ->
  @World = require('../support/world.coffee').World

  @Given "I load the Testudo demo", (callback) ->
    @browser
      .get('http://127.0.0.1:3000')
      .nodeify(callback)

  @When "I click on the map", (callback) ->
    @browser
      .elementById('new-todo')
      .type('finish demo!')
      .keys('\uE006')
      .nodeify(callback)

  @Then "I see instagram photos", (callback) ->
    callback()
