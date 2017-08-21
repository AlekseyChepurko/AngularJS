import UserService from './user.service';
import WeatherService from './weather.service';

angular.module('services',[])
    .service('userService', UserService)
    .service('weatherService', WeatherService);