import angular from 'angular';
import AppConfig from './AppConfig';
import ConfigEnvironment from './ConfigEnvironment';
import IonicConfig from './IonicConfig';
import TranslateConfig from './TranslateConfig';

export default angular.module('Config', [
    ConfigEnvironment
  ])
  .config(AppConfig)
  .config(IonicConfig)
  .config(TranslateConfig)
  .name;
