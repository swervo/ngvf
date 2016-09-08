var ThisApp = angular.module('domng', [
    'ui.router',
    'ngForce',
    'home'
])

.run(function() {

})

.config(function($stateProvider, $urlRouterProvider, $logProvider) {
    // debugger;
    $logProvider.debugEnabled(window.debug);

    $stateProvider
        .state('app', {
            url: '/app',
            template: '<ui-view/>',
            abstract: true,
            controller: 'appCtrl',
            onEnter: function() {
                console.log('enter app');
            }
        });
    // $urlRouterProvider.when('', '/home');

});
