import { cityChoice } from './city-choice/city-choice.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

export const components = angular.module('components', [])
    .component('user', UserComponent)
    .component('login', LoginComponent)
    .component('cityChoice', cityChoice)
    .component('weather', WeatherComponent)
    .name;