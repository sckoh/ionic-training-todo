// app 一开始跑的方法
export default function AppRun($ionicPlatform, Session, $http) {
  'ngInject';

  // 把token默认放在 header 里
  $http.defaults.headers.common.Authorization = Session.getBearerToken();

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      console.log('configure keyboard');
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
}
