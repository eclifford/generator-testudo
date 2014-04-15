module.exports = function() {
  this.World = require('../../support/world').World;
  this.Given("I load the todos demo", function(callback) {
    this.browser.get('http://127.0.0.1:3000').nodeify(callback);
  });
  this.When("I add a new todo", function(callback) {
    this.browser
      .elementById('new-todo')
      .type('finish demo!')
      .keys('\uE006')
      .nodeify(callback);
  });
  this.Then("It should appear with in the list", function(callback) {
    var that = this;
    this.browser
      .elementByCss('#todo-list li')
      .text().should.become('finish demo!')
      .fin(function() {
        return that.browser.quit();
      })
      .nodeify(callback);
  });
};
