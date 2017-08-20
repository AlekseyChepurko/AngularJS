function ctrl( $scope, userService ) {
    $scope.isAuth = userService.isAuth();
}

export const UserComponent = {
    template: require('./user.template.html'),
    controller: ctrl,
    controllerAs: 'userCtrl'
};