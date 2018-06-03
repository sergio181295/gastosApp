angular.module('principalModule', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
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

        $locationProvider.html5Mode(true);
    })
    .controller('inicioController', function ($scope) {
        console.log("inicioController");
        $scope.texto = "Pagina de Inicio";
    })
    .controller('gastosController', function ($scope) {
        console.log("gastosController");
        $scope.texto = "Pagina de gastos";
    })
    .controller('usuariosController', function ($scope) {
        console.log("usuariosController");
        $scope.texto = "Pagina de usuarios";
    })