import todoListTemplate from './TodoList.html';
import TodoListCtrl from './TodoListCtrl';

export default function TodoListRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('TodoList', {
      url: '/todos',
      templateUrl: todoListTemplate,
      controller: TodoListCtrl,
      controllerAs: 'vm',
      loginRequired: true
    });
}
