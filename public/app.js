// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider, $logProvider) {

// use to enable log for debugging directive issues
    $logProvider.debugEnabled(true);  


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

        // topic page
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        })

        // comment page
        .when('/comment', {
            templateUrl: 'page-contact.html',
            controller: 'commentController'
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
});


// comment page controller
animateApp.controller('commentController', function($scope, $http, $sce) {
    $scope.pageClass = 'page-contact';

    $scope.formData = {};
    console.log($scope.form._id)
    
    $http.get('/comment/:id')
        .success(function(data) {
                $scope.myHTML = $sce.trustAsHtml(data);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
});
