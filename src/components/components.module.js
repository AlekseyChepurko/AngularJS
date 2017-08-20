import { cityChoice } from './city-choice';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

angular.module('components', [])
    .component('user', UserComponent)
    .component('login', LoginComponent)
    .component('cityChoice', cityChoice);