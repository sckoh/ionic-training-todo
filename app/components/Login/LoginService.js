export default function LoginService($http, ApiService, ClientSecret, $httpParamSerializerJQLike, Session, StateService, $ionicHistory) {
  'ngInject';

  var service = {
    login
  };
  return service;

  function login(user) {
    return $http.post(ApiService.getUrl('/oauth/token'), $httpParamSerializerJQLike({
        grant_type: 'password',
        username: user.username,
        password: user.password
      }), {
        headers: {
          'Authorization': ClientSecret,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(response) {
        Session.create(response.data.access_token, user.username);
        StateService.goToHome();
      });
  }
}
