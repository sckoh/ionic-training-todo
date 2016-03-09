import angular from 'angular';
import ListTwoItemDirective from './ListTwoItem/ListTwoItemDirective';
import Login from './Login';
import Register from './Register';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export default angular
  .module('AppComponent', [
    Login,
    Register,
    TodoList,
    TodoAdd
  ])
  .directive('listTwoItem', ListTwoItemDirective)
  .name;
