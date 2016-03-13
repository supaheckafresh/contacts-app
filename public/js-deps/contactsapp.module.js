
angular.module('contactsApp', []);

angular.module('contactsApp')
    .controller('ContactsController', function ($http) {
        var vm = this;

        $http.get('get-users')
            .then(function successCb(res) {
                vm.users = res.data;
                console.log(vm.users);
            }, function errorCb() {
                alert('There was an error retrieving Users data');
            });

        vm.addUser = function () {

        }
    });