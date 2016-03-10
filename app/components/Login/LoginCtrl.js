export default class LoginCtrl {
  constructor(LoginService, $scope) {
    'ngInject';

    var vm = this;
    vm.signIn = signIn;

    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;

      vm.activated = true;
    }

    function signIn(user, signInForm) {
      LoginService.login(user)
        .then(function functionName() {
          vm.user = {};
          signInForm.$setPristine();
        })
        .catch(function() {
          alert('fail');
        });
    };
  }
}
