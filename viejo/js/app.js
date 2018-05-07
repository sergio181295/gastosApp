angular.module('principalModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'paginas/inicio.html',
            controller: 'inicioController'
        })
        .when('/gastos', {
            templateUrl: 'paginas/gastos.html',
            controller: 'gastosController'
        })
        .when('/usuarios', {
            templateUrl: 'paginas/usuarios.html',
            controller: 'usuariosController'
        })
        .otherwise({
            redirectTo: '/'
        })
    })
    .controller('inicioController', function ($scope) {
        console.log("hola");
        $scope.texto = "Pagina de Inicio";
    })
    .controller('gastosController', function ($scope) {
        $scope.texto = "Pagina de gastos";
    })
    .controller('usuariosController', function ($scope) {
        $scope.texto = "Pagina de usuarios";
    })