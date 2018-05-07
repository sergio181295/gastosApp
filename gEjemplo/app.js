angular.module('enrutamiento',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'paginas/inicio.html',
        controller: 'MainController'
    })
    .when('/contactenos', {
        templateUrl: 'paginas/contactenos.html',
        controller: 'ContactenosController'
    })
    .when('/nosotros',{
        templateUrl: 'paginas/nosotros.html',
        controller: 'NosotrosController'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.controller('MainController', function($scope){
    $scope.texto = "Esta es la pagina principal";
})
.controller('ContactenosController', function($scope){
    $scope.texto = "Por favor mandenos un correo a xx@xxx.com";
})
.controller('NosotrosController', function($scope){
    $scope.texto = "Esta es nuestra pagina!";
})