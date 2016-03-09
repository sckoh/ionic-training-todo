// 用了 AppService 里的 id 保存的localStorage util
// 为了分开同域名但不同 context path 的网页的 localStorage
export default function StorageService($localStorage, AppService) {
  'ngInject';

  var appLocalStorage = initAppLocalStorage();
  return appLocalStorage;

  function initAppLocalStorage() {
    if (!$localStorage[AppService.getAppId()]) {
      $localStorage[AppService.getAppId()] = {};
    }
    return $localStorage[AppService.getAppId()];
  }
}
