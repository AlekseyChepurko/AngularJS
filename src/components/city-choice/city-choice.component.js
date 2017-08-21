function ctrl($scope, $state) {
    $scope.city = '';
    this.submit = () => {
        console.log($scope.city);
        $state.go('logged.home',{city: $scope.city}, {reload: true})
    }
}

export const cityChoice = {
    template: require('./city-choice.template.html'),
    controller: ctrl,
    controllerAs: 'CityChoiceCtrl'
};