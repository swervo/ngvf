var ThisApp = angular.module('domng', [
    'ui.router',
    'ngForce'
])

.run(function() {

})

.config(function($stateProvider, $urlRouterProvider, $logProvider) {
    debugger;
    $logProvider.debugEnabled(window.debug);

    $stateProvider
        .state('app', {
            url: '/home',
            templateUrl: '/apex/skymedia_nav',
            // abstract: true,
            controller: 'appCtrl'
        });
    // $urlRouterProvider.when('', '/home');

});
