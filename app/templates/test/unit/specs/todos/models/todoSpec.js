define(['modules/todos/models/todo'], function(Todo) {
  var todo;
  todo = null;
  return describe("Todo Model", function() {
    before(function() {
      return todo = new Todo();
    });
    return it("should have the proper defaults", function() {
      expect(todo.get('title')).to.equal('');
      return expect(todo.get('completed')).to.equal(false);
    });
  });
});
