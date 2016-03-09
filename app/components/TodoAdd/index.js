import angular from 'angular';
import TodoAddDirective from './TodoAddDirective';

export default angular.module('TodoAddComponent', [])
  .directive('todoAdd', TodoAddDirective)
  .name;
