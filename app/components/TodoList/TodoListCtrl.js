import todoAddModalTemplate from '../TodoAdd/TodoAddModal.html';

export default class TodoListCtrl {
  constructor(Session, StateService, TodoService, $scope, $ionicModal, $ionicListDelegate) {
    'ngInject';

    var vm = this;
    vm.service = TodoService;
    vm.deleteTodo = deleteTodo;
    vm.signOut = signOut;
    vm.openTodoAddModal = openTodoAddModal;
    vm.openTodoEditModal = openTodoEditModal;
    vm.closeTodoModal = closeTodoModal;

    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;

      initTodoAddModal();
      findAll();
      vm.activated = true;
    }

    function signOut() {
      Session.destroy();
      StateService.goToLogin();
    }

    function findAll() {
      TodoService.findAll()
        .then(function(todos) {
          vm.todos = todos;
        });
    }

    function openTodoAddModal() {
      TodoService.saveTodo = TodoService.save;
      TodoService.saveMode = 'Add';
      vm.modal.show();
    }

    function openTodoEditModal(todo) {
      TodoService.saveTodo = TodoService.update;
      TodoService.saveMode = 'Edit';
      TodoService.todo = todo;
      vm.modal.show();
    }

    function closeTodoModal() {
      TodoService.todo = {};
      vm.modal.hide();
    }

    function initTodoAddModal() {
      $ionicModal.fromTemplateUrl(todoAddModalTemplate, {
          scope: $scope
        })
        .then(function(modal) {
          vm.modal = modal;
        });
      $scope.$on('$destroy', function() {
        vm.modal.remove();
      });
    }

    function deleteTodo(todo) {
      TodoService.remove(todo.id)
        .then(function() {
          $ionicListDelegate.closeOptionButtons();
        });
    }
  }
}
