import angular from 'angular';
import TodoListRoute from './TodoListRoute';
import TodoService from './TodoService';

export default angular.module('TodoListComponent', [])
  .factory('TodoService', TodoService)
  .config(TodoListRoute)
  .name;
