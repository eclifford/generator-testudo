module.exports = ->
  @World = require('../support/world.coffee').World

  @Given "I load the Testudo demo", (callback) ->
    @browser
      .get('http://127.0.0.1:3000')
      .nodeify(callback)

  @When "I click on the map", (callback) ->
    @browser
      .waitForElementById('maps')
      .moveTo()
      .buttonDown()
      .waitForElementById('maps')
      .buttonUp()
      .nodeify(callback)

  @Then "I see instagram photos", (callback) ->
    @browser
      .hasElementByClassName('module-content')
      .sleep(3000)
      .fin =>
        @browser.quit()
      .done -> callback()
