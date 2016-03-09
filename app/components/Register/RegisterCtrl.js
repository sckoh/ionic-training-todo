export default class RegisterCtrl {
  constructor(RegisterService) {
    'ngInject';

    var vm = this;
    vm.register = register;

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
