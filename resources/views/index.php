<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contacts App</title>

    <link rel="stylesheet" href="/css-deps/bootstrap.min.css">
    <link rel="stylesheet" href="/css-deps/font-awesome.min.css">

</head>
<body>

    <div data-ng-app="contactsApp" class="container">

        <div data-ng-controller="ContactsController as contacts">

            <div class="row">
                <h1 class="col-xs-6">Contacts</h1>
                <button data-ng-click="contacts.addUser()" class="btn btn-info pull-right">Add User</button>
            </div>

            <ul data-ng-repeat="user in contacts.users">
                <li>{{ user.name }}</li>
            </ul>


        </div>

    </div>



    <script src="/js-deps/jquery.min.js"></script>
    <script src="/js-deps/lodash.core.min.js"></script>
    <script src="/js-deps/angular.min.js"></script>
    <script src="/js-deps/ui-bootstrap.min.js"></script>
    <script src="/js-deps/contactsapp.module.js"></script>

</body>
</html>