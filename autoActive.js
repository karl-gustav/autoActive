(function () {
  'use strict';
  
  angular.module('autoActive', [])
    .directive('autoActive', ['$location', '$timeout', function ($location, $timeout) {
      return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
          function setActive() {
            var path = $location.path();
            if (path) {
              angular.forEach(element.find('li'), function (li) {
                var anchor = li.querySelector('a');
                if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                  angular.element(li).addClass('active');
                } else {
                  angular.element(li).removeClass('active');
                }
              });
            }
          }

          var timeout = $timeout(setActive, 1);
          var unbind = scope.$on('$locationChangeSuccess', setActive);
          scope.$on('$destroy', function() {
            $timeout.cancel(timeout);
            unbind();
          });
        }
      }
    }]);
}());
