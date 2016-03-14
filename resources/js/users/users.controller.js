/**
 * Created by Neil Strain on 3/13/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http) {
            var vm = this;

            $http.get('get-users')
                .then(function successCb(res) {
                    vm.users = res.data;
                }, function errorCb() {
                    alert('There was an error retrieving Users data');
                });

            vm.addUser = function () {

            };
        });

}());
