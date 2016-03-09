export default function StateChangeRun($rootScope, Session, StateService) {
  'ngInject';

  // 为了检测是否已经登录，然后控制跳转
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

    checkLogin();

    function checkLogin() {
      if (toState.loginRequired && !Session.isAuthenticated()) {
        event.preventDefault();
        StateService.goToLogin();
      }
    }
  });

}
