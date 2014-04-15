define(['backbone', 'modules/todos/views/todos'], function(Backbone, TodoView) {
  var spy, view;
  view = null;
  spy = null;
  return describe("Todo View", function() {
    before(function() {
      var model;
      model = new Backbone.Model({
        title: 'test',
        order: 1,
        completed: false
      });
      spy = sinon.stub(TodoView.prototype, "toggleCompleted");
      return view = new TodoView({
        model: model
      });
    });
    it("returns the view object", function() {
      return expect(view.render()).to.equal(view);
    });
    it("should have the correct content", function() {
      expect(view.$el.find('label')).to.have.html('test');
      return expect(view.$el.find('.toggle')).not.to.be.checked;
    });
    return it("events should work", function() {
      return view.$el.find(".toggle").click();
    });
  });
});
