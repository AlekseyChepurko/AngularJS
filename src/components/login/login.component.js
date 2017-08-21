function ctrl($scope, $http, userService) {

    $scope.isAuth = userService.isAuth();

    this.loginVK = () => {
        userService.loginVK()
    };

    this.click = () => {
        const data = userService.getUserData();
        if ( data !== null ){
            $http.post('/api/user',{
                id: data.user_id,
                authDeadline: data.expires_in
            })
                .then(
                    (res) => {
                        console.log(res);
                    }
                );
        }
        console.log('just click');
    }
}

export const LoginComponent = {
    template: require('./login.template.html'),
    controller: ctrl,
    controllerAs: 'loginCtrl'
};
