export default function RegisterService($http, ApiService) {
  'ngInject';

  var service = {
    register
  };
  return service;

  function register(user) {
    return $http.post(ApiService.getUrl('/users'), {
      username: user.username,
      password: user.password
    });
  }
}
