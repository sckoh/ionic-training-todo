import angular from 'angular';

// 设置 app 的配置
export default angular.module('ConfigEnvironment', [])
  .constant('ClientSecret', 'Basic YXBwY2xpZW50OnNlY3JldA==')
  .constant('DOMAIN', 'http://localhost:8081')
  .name;
