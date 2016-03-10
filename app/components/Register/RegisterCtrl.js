export default class RegisterCtrl {
  constructor(RegisterService, $scope) {
    'ngInject';

    var vm = this;
    vm.register = register;

    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;

      vm.activated = true;
    }

    function register(user) {
      RegisterService.register(user)
        .then(function(response) {
          vm.message = 'Register successfully';
        })
        .catch(function() {
          vm.message = 'Fail to register';
        });
    }
  }
}
