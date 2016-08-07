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
            vm.newImgUrl = '';

            // Get all current users from the database.
            vm.displayUsers = function () {
                $http.get('get-users')
                    .then(function successCb(res) {
                        vm.users = res.data;


                    }, function errorCb() {
                        alert('There was an error retrieving Users data');
                    });
            };
            vm.displayUsers();


            vm.addUser = function () {


                $http.post('add-user', {
                        name: vm.newName,
                        email: vm.newEmail,
                        phone: vm.newPhone,
                        password: vm.newPassword,
                        img_url: vm.newImgUrl,
                        intrash: false
                    })
                    .then(
                        function successCb(res) {
                            console.log('success', res);
                            vm.displayUsers();
                        },
                        function errorCb(res) {
                            console.log('error', res);
                        });
            };

        });

}());
