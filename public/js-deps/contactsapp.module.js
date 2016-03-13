
angular.module('contactsApp', []);

angular.module('contactsApp')
    .controller('ContactsController', function ($http) {
        var vm = this;

        $http.get('get-users')
            .then(function successCb(res) {
                vm.users = res.data;
            }, function errorCb() {
                alert('There was an error retrieving Users data');
            });

        vm.test = 'this is some data';

        console.log(vm.test);

    });