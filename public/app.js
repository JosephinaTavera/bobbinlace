// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'animateApp.directives', 'ngSanitize']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })

        // about page
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })

        // contact page
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        });

});


// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope, $http, $sce) {
    $scope.pageClass = 'page-home';

     $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/index')
        .success(function(data) {
            $scope.myHTML = $sce.trustAsHtml(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });



});

// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';

    
});

// contact page controller
animateApp.controller('contactController', function($scope, $http, $sce) {
    $scope.pageClass = 'page-contact';

    $http.get('/index/topic/:username')
    .success(function(data) {
            $scope.myHTML = $sce.trustAsHtml(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

// $http.get('/comment/:_id')
//     .success(function(data) {
//             $scope.myHTML = $sce.trustAsHtml(data);
//             console.log(data);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });

});