module.exports = function() {
  this.World = require('../support/world.js').World;
  this.Given("I load the Testudo demo", function(callback) {
    return this.browser.get('http://127.0.0.1:3000').nodeify(callback);
  });
  this.When("I click on the map", function(callback) {
    this.browser
      .elementById('new-todo')
      .type('finish demo!')
      .keys('\uE006')
      .nodeify(callback);
  });
  this.Then("I see instagram photos", function(callback) {
  });
};
