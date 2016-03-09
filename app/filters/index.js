import angular from 'angular';
import CapitalizeFilter from './CapitalizeFilter';

export default angular.module('Filters', [])
  .filter('capitalize', CapitalizeFilter)
  .name;
