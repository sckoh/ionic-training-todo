import listTwoItemTemplate from './ListTwoItem.html';

export default function ListTwoItemDirective() {
  return {
    restrict: 'E',
    templateUrl: listTwoItemTemplate,
    scope: {
      text1: '=',
      text2: '='
    }
  };
}
