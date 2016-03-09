import registerTemplate from './Register.html';
import RegisterCtrl from './RegisterCtrl';

export default function RegisterRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('Register', {
      url: '/register',
      templateUrl: registerTemplate,
      controller: RegisterCtrl,
      controllerAs: 'vm',
      loginRequired: false
    });
}
