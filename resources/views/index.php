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
                <h1 class="col-xs-12">Contacts</h1>
                <form class="col-xs-9 form-inline add-user-form">
                    <input data-ng-model="contacts.newName" class="form-control" type="text" placeholder="Name">
                    <input data-ng-model="contacts.newEmail" class="form-control" type="text" placeholder="email">
                    <input data-ng-model="contacts.newPhone" class="form-control" type="text" placeholder="phone">
                    <input data-ng-model="contacts.newPassword" class="form-control" type="text" placeholder="password">
                    <button data-ng-click="contacts.addUser()" class="btn btn-info add-btn pull-right">Add User</button>
                </form>
            </div>

            <ul>
                <li data-ng-repeat="user in contacts.users" class="user row">
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