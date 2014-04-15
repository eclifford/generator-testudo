define(['modules/todos/collections/todos'], function(Todos) {
  var todos = null;
  return describe("Todos Collection", function() {
    before(function() {
      todos = Todos;
      return todos.add([
        {
          title: 'Go to the gym',
          completed: false,
          order: 1
        }, {
          title: 'Do the laundry',
          completed: true,
          order: 2
        }, {
          title: 'Do taxes',
          completed: false,
          order: 3
        }
      ]);
    });
    it("remaining()", function() {
      return expect(todos.remaining().length).to.equal(2);
    });
    it("completed()", function() {
      return expect(todos.completed().length).to.equal(1);
    });
    return it("nextOrder()", function() {
      return expect(todos.nextOrder()).to.equal(4);
    });
  });
});
