import angular from 'angular';
import LoginRoute from './LoginRoute';
import LoginService from './LoginService';

export default angular.module('LoginComponent', [])
  .factory('LoginService', LoginService)
  .config(LoginRoute)
  .name;
