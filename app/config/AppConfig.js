export default function AppConfig(DOMAIN, AppServiceProvider, $urlRouterProvider, ApiServiceProvider, $httpProvider, $mdGestureProvider) {
  'ngInject';

  // 当 url 不匹配任何state 时就会进入这个方法
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get('$state');
    var Session = $injector.get('Session');
    if (Session.isAuthenticated()) {
      $state.go('TodoList');
    } else {
      $state.go('Login');
    }
  });

  $mdGestureProvider.skipClickHijack();

  // 设置 StorageService 的id
  AppServiceProvider.id('b2b');
  // 设置api的域名
  ApiServiceProvider.domain(DOMAIN);

}
