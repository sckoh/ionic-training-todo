import todoAddTemplate from './TodoAdd.html';
import TodoAddCtrl from './TodoAddCtrl';

export default function TodoAddDirective() {
  return {
    restrict: 'E',
    templateUrl: todoAddTemplate,
    controller: TodoAddCtrl,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      closeModal: '='
    }
  };
}
