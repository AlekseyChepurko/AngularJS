import './services/services.module';
import './components/components.module';

angular.module('myApp', ['ui.router', 'services', 'components'])
    .config(($stateProvider) => {
        $stateProvider
            .state({
                name: 'logged',
                abstract: true,
                template: '<ui-view></ui-view>',
                resolve: {
                    logged: (userService, $state) => {
                        if ( !userService.isAuth() )
                            $state.go('login');
                    }
                }
            })
            .state({
                name: 'logged.home',
                url: '/:city',
                template: "<weather city='city'></weather>",
                resolve: {
                    city: ($stateParams) => $stateParams.city
                },
                controller: function(city, $scope) {
                    $scope.city = city
                }
            })
            .state({
                name: 'login',
                url: '/login',
                template: '<login></login>'
            })
    });
