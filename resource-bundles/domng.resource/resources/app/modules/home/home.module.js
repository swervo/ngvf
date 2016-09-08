
angular.module('home', ['ngForce'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                templateUrl: 'apex/domng_home',
                controller: 'homeCtrl',
                onEnter: function() {
                    console.log('enter home');
                }
            });
    });
