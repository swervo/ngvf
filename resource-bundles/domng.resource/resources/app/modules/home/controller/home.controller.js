angular.module('home')

.controller('homeCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    '$q',
    'sfrquery',
    'Version',
    function($rootScope, $scope, $state, $q, sfrquery, Version) {
        debugger;
        $scope.version = Version;
        // this method returns a promise and is therefore "chainable"
        sfrquery.query('SELECT id, Name, Phone FROM Account')
        // Promises allow you to attach success and catch handlers
        // via .then() -- success and
        // via .catch() -- failure methods.
        .then(function(results) {
            debugger;
            // this code will not be run unless the promise resolves
            // successfully.
            // Again, we set a $scope variable to expose the data to the view
            $scope.accounts = results;
        }).catch(function(e) {
                // well Crap. An error has occured. In this case, log the error
                // in the js console
                $log.error('Caught an Error trying to retrieve soql query results', e);
            });
    }

]);
