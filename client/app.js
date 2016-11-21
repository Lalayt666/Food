angular.module("super_food", ["ngRoute"]).config(
    function($routeProvider) {
        $routeProvider.when('/library/:idFood', {
            templateUrl: 'client/app/Library/foodList.html',
            controller: 'FoodController'
        });
        
        $routeProvider.when('/avtoriz', {
            templateUrl: 'client/app/Vika/vika.html',
            controller: 'Foo'
        });
        $routeProvider.when('/menu', {
            templateUrl: 'client/app/Valya/valya.html',
            controller: 'Menu'
        });
        $routeProvider.otherwise({
            redirectTo: '/avtoriz'
        });

        

    });
