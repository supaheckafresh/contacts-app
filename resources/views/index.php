<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contacts App</title>

    <link rel="stylesheet" href="/build/css/css-deps.css">
    <link rel="stylesheet" href="/build/css/styles.css">

</head>
<body>

    <div data-ng-app="contactsApp" class="container">

        <div data-ng-controller="ContactsController as contacts">

            <div class="row">
                <h1 class="col-xs-6">Contacts</h1>
                <button data-ng-click="contacts.addUser()" class="btn btn-info pull-right add-btn">Add User</button>
            </div>

            <ul data-ng-repeat="user in contacts.users">
                <li class="user row">
                    <h3 class="col-xs-3">{{ user.name }}</h3>
                    <span class="details col-xs-6">{{ user.email + ' | ' + user.phone }}</span>
                    <button class="edit-btn">Edit User</button>
                </li>
            </ul>


        </div>

    </div>


    <script src="/build/js/deps.js"></script>
    <script src="/build/js/app.js"></script>

</body>
</html>