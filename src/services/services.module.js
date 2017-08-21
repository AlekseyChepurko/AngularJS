import UserService from './user.service';
import WeatherService from './weather.service';

export const services = angular.module('services',[])
    .service('userService', UserService)
    .service('weatherService', WeatherService)
    .name;