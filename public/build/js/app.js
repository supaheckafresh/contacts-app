!function(){"use strict";angular.module("contactsApp",[])}(),function(){"use strict";angular.module("contactsApp").controller("ContactsController",["$http",function(n){var e=this;e.newName="",e.newEmail="",e.newPhone="",e.newPassword="",n.get("get-users").then(function(n){e.users=n.data},function(){alert("There was an error retrieving Users data")}),e.addUser=function(){console.log(e.newName)}}])}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzYXBwLm1vZHVsZS5qcyIsInVzZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkaHR0cCIsInZtIiwidGhpcyIsIm5ld05hbWUiLCJuZXdFbWFpbCIsIm5ld1Bob25lIiwibmV3UGFzc3dvcmQiLCJnZXQiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJkYXRhIiwiYWxlcnQiLCJhZGRVc2VyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkNBRUEsV0FFQSxZQUVBQSxTQUFBQyxPQUFBLHFCQ0ZBLFdBRUEsWUFFQUQsU0FBQUMsT0FBQSxlQUNBQyxXQUFBLHNCQUFBLFFBQUEsU0FBQUMsR0FDQSxHQUFBQyxHQUFBQyxJQUdBRCxHQUFBRSxRQUFBLEdBQ0FGLEVBQUFHLFNBQUEsR0FDQUgsRUFBQUksU0FBQSxHQUNBSixFQUFBSyxZQUFBLEdBR0FOLEVBQUFPLElBQUEsYUFDQUMsS0FBQSxTQUFBQyxHQUNBUixFQUFBUyxNQUFBRCxFQUFBRSxNQUNBLFdBQ0FDLE1BQUEsOENBR0FYLEVBQUFZLFFBQUEsV0FDQUMsUUFBQUMsSUFBQWQsRUFBQUUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29udGFjdHNBcHAnLCBbXSk7XHJcblxyXG59KCkpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBOZWlsIFN0cmFpbiBvbiAzLzEzLzIwMTYuXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2NvbnRhY3RzQXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignQ29udGFjdHNDb250cm9sbGVyJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9wZXJ0aWVzIHRvIGhvbGQgZGF0YSBmcm9tIGFkZCBuZXcgdXNlciBmb3JtLlxyXG4gICAgICAgICAgICB2bS5uZXdOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIHZtLm5ld0VtYWlsID0gJyc7XHJcbiAgICAgICAgICAgIHZtLm5ld1Bob25lID0gJyc7XHJcbiAgICAgICAgICAgIHZtLm5ld1Bhc3N3b3JkID0gJyc7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgYWxsIGN1cnJlbnQgdXNlcnMgZnJvbSB0aGUgZGF0YWJhc2UuXHJcbiAgICAgICAgICAgICRodHRwLmdldCgnZ2V0LXVzZXJzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS51c2VycyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgVXNlcnMgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2bS5hZGRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0ubmV3TmFtZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
