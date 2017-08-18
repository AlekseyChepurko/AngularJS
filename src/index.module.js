angular.module('myApp', ['ui.router', 'satellizer'])
    .config(($stateProvider) => {
        $stateProvider
            .state({
                name: 'layout',
                abstract: true,
                template: '<ui-view></ui-view>',
                resolve: {
                    logged: ($http, $state) => {
                        $http.get('/aut')
                            .then(res => {
                                if(!res.data) $state.go('login')
                            })
                    }
                }
            })
            .state({
                name: "layout.weather",
                url: '/',
                template: '<div>weather</div>'
            })
            .state({
                name: 'login',
                url: '/login',
                template: `<button ng-click="authenticate('google')">Sign in with Google</button>`
            })
    })
    .config( ($authProvider) => {
        $authProvider.google({
            clientId: '510983164184-qhk9d92o82f50ubkvducp4fl9j31jf8c.apps.googleusercontent.com'
        });
    })

    .controller('LoginCtrl', function($scope, $auth) {
        $scope.authenticate = function(provider) {
            console.log(provider);
            $auth.authenticate(provider);
        };

    });
