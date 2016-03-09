export default function AppServiceProvider() {
  var appId;
  this.id = id;

  this.$get = [function() {
    return new AppService(appId);
  }];

  function id(appId) {
    appId = appId;
  }
}

function AppService(id) {
  return {
    getAppId: getAppId
  };

  function getAppId() {
    return id;
  }
}
