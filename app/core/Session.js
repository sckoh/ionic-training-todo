export default angular.module('Session', [])
  .factory('Session', Session)
  .constant('UserType', {
    USER: 'user',
  })
  .name;

// 保存／删除登录信息的util
function Session(UserType, StorageService, $http) {
  'ngInject';

  var session = {
    create,
    destroy,
    isAuthenticated,
    getBearerToken,
  };
  return session;

  function create(token, username, type = UserType.USER) {
    StorageService[type] = StorageService[type] || {};
    StorageService[type].accessToken = token;
    StorageService[type].isAuthenticated = true;
    StorageService[type].username = username;
    $http.defaults.headers.common.Authorization = session.getBearerToken();
  }

  function destroy(type = UserType.USER) {
    delete StorageService[type];
    delete $http.defaults.headers.common.Authorization;
  }

  function isAuthenticated(type = UserType.USER) {
    return StorageService[type] && StorageService[type].isAuthenticated === true;
  }

  function getBearerToken(type = UserType.USER) {
    if (StorageService[type] && StorageService[type].accessToken)
      return 'Bearer ' + StorageService[type].accessToken;
    else
      return '';
  }

}
