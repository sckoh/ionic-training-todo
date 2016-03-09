import angular from 'angular';
import ApiService from './ApiService';
import AppService from './AppService';
import LocaleUtils from './LocaleUtils';
import Session from './Session';
import StateService from './StateService';
import StorageService from './StorageService';

export default angular.module('AppCore', [
    Session
  ])
  .provider('ApiService', ApiService)
  .provider('AppService', AppService)
  .constant('LocaleUtils', LocaleUtils)
  .factory('StateService', StateService)
  .factory('StorageService', StorageService)
  .name;
