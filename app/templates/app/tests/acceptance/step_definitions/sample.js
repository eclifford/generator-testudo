module.exports = function() {
  this.World = require('../support/world.coffee').World;
  this.Given("I load the Testudo demo", function(callback) {
    return this.browser.get('http://127.0.0.1:3000').nodeify(callback);
  });
  this.When("I click on the map", function(callback) {
    return this.browser.waitForElementById('maps').moveTo().buttonDown().waitForElementById('maps').buttonUp().nodeify(callback);
  });
  return this.Then("I see instagram photos", function(callback) {
    return this.browser.hasElementByClassName('module-content').sleep(3000).fin((function(_this) {
      return function() {
        return _this.browser.quit();
      };
    })(this)).done(function() {
      return callback();
    });
  });
};
