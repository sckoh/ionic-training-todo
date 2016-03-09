export default class LoginCtrl {
  constructor(LoginService) {
    'ngInject';

    var vm = this;
    vm.signIn = signIn;

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
