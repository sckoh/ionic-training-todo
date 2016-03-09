// 页面跳转的util
export default function StateService(Session, $ionicViewSwitcher, $state, $ionicHistory, $timeout) {
  'ngInject';

  var service = {
    go,
    back,
    goToHome,
    clearAllAndGo,
    goToLogin,
    clearPreviousStateCache
  };
  return service;

  function go(state, params) {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go(state, params);
  }

  function back() {
    var currentStateId = [$ionicHistory.currentView().stateId];
    $ionicViewSwitcher.nextDirection('back');
    $timeout(clearPreviousStateCache(currentStateId), 700);
    $ionicHistory.goBack();
  }

  function clearPreviousStateCache(stateIds) {
    return function() {
      $ionicHistory.clearCache(stateIds);
    };
  }

  function goToHome() {
    $ionicHistory.nextViewOptions({
      disableBack: true,
      historyRoot: true,
      disableAnimate: true
    });
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache()
      .then(function() {
        $state.go('TodoList');
      });
  }

  function clearAllAndGo(state, stateParams) {
    $ionicHistory.nextViewOptions({
      disableBack: true,
      historyRoot: true,
      disableAnimate: true
    });
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache()
      .then(function() {
        $state.go(state, stateParams);
      });
    $timeout(() => {
      $ionicHistory.clearCache();
    }, 700);
  }

  function goToLogin() {
    clearAllAndGo('Login');
  }

}
