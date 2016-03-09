export default function IonicConfig($ionicConfigProvider) {
  'ngInject';

  // 设置 ionic 配置 http://ionicframework.com/docs/api/provider/$ionicConfigProvider/
  $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);
  $ionicConfigProvider
    .tabs.style('standard').position('bottom');
  $ionicConfigProvider
    .navBar.alignTitle('center')
    .positionPrimaryButtons('right')
    .positionSecondaryButtons('right');
  $ionicConfigProvider
    .backButton
    .text('')
    .icon('ion-ios-arrow-left')
    .previousTitleText(false);
}
