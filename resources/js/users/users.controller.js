/**
 * Created by Neil Strain on 3/13/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http) {
            var vm = this;

            // Properties to hold data from add new user form.
            vm.newName = '';
            vm.newEmail = '';
            vm.newPhone = '';
            vm.newPassword = '';

            // Get all current users from the database.
            $http.get('get-users')
                .then(function successCb(res) {
                    vm.users = res.data;
                }, function errorCb() {
                    alert('There was an error retrieving Users data');
                });

            vm.addUser = function () {
                console.log(vm.newName);
            };
        });

}());
