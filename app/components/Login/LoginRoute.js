import loginTemplate from './Login.html';
import LoginCtrl from './LoginCtrl';

export default function LoginRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('Login', {
      url: '/login',
      templateUrl: loginTemplate,
      controller: LoginCtrl,
      controllerAs: 'vm',
      loginRequired: false
    });
}
