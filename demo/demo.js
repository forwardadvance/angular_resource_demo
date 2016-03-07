// Resource
// query
// get({id:1})
// new
// $save
// factory


angular.module('app', [])
  .controller('authorController', function($scope, Author) {
    $scope.author = new Author();
  })
  .factory('Author', function($resource) {
    var url = 'http://simple-api.herokuapp.com/api/v1/authors/:id'
    return $resource(url);
  });


  // $scope.author = Author.query();
  // var newAuthor = new Author({first_name: "Mikey"});
  // newAuthor.$save();














  // .service('author', function($http) {
  //   return {
  //     get: function(id) {
  //       var url = 'http://simple-api.herokuapp.com/api/v1/authors/' + id;
  //       return $http(url);
  //     }
  //   }
  // });









// angular.module('app', ['ngResource'])
//   .controller('authorController', function($scope, $resource, Author) {
//     $scope.author = Author.query();
//     $scope.newAuthor = new Author({
//       "first_name": "Mick",
//       "surname": "Johnson",
//       "email": "mick@example.com",
//       "about": "Awesome Dave"
//     })
//     $scope.newAuthor.$save();
//   })
//   .factory('Author', function($resource) {
//     var url = 'http://simple-api.herokuapp.com/api/v1/authors/:id'
//     return $resource(url);
//   });






// We can use a service to AJAX content:
// .service('author', function($http) {
//   return {
//     get: function(id) {
//       var url = 'http://simple-api.herokuapp.com/api/v1/authors/' + id;
//       return $http(url);
//     }
//   }
// })

// Alternately we could use a resource:
// $scope.author = $resource('http://simple-api.herokuapp.com/api/v1/authors/:id').get({id:1});

// Define a factory to make resources
// .factory('Author', function($resource) {
//   return $resource('http://simple-api.herokuapp.com/api/v1/authors/:id');
// });

// Use Get to pull from the server
// $scope.author = Author.get({ id: 1 });
// $scope.authors = Author.query();

// Resource is newable
// $scope.newAuthor = new Author({first_name: 'test'});
// $scope.newAuthor.$save();

// Initial state
// angular.module('app', ['ngResource'])
//   .controller('authorController', function($scope, $resource, Author) {
//   })

// .service('author', function($http) {
//   return {
//     get: function(id) {
//       var url = 'http://simple-api.herokuapp.com/api/v1/authors/' + id;
//       return $http(url);
//     }
//   }
// })
