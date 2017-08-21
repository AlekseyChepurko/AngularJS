import "angular";
import uiRouter from "angular-ui-router";
import "../bower_components/oauth-js/dist/oauth";
import { services } from './services/services.module';
import { components } from './components/components.module';

angular.module('myApp', [uiRouter, services, components])
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
                component: 'weather',
                resolve: {
                    city: ($stateParams) => $stateParams.city
                }
            })
            .state({
                name: 'login',
                url: '/login',
                component: 'login'
            })
    });
