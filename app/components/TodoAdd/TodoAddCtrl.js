export default class {
  constructor(TodoService, $scope) {
    'ngInject';

    var vm = this;
    vm.service = TodoService;
    vm.saveTodo = saveTodo;

    function saveTodo(todo) {
      TodoService.saveTodo(todo)
        .then(function() {
          vm.closeModal();
        });
    };
  }
}
