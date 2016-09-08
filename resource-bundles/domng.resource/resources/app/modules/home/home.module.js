
angular.module('home', [])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                // template: '<div>This is home</div>',
                templateUrl: 'apex/domng_home',
                controller: 'homeCtrl',
                onEnter: function() {
                    console.log('enter home');
                }
            });
    });
