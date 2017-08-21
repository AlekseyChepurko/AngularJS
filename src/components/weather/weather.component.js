function ctrl($scope, weatherService){
    $scope.$watch('WeatherCtrl.city', (newVal) => {
        weatherService.setCurrentCity(newVal);
    });
    $scope.weather = weatherService.fetchWeather();
    $scope.$on('weather-data-changed', (data) => {
        console.log('data changed',data);
        $scope.weather = weatherService.getWeatherData();
        $scope.weather.main.temp = Math.round($scope.weather.main.temp);
    });
    this.click = () => {
        $scope.weather = weatherService.getWeatherData();
        console.log($scope.weather);
    }
}

export const WeatherComponent = {
    template: require('./weather.template.html'),
    controller: ctrl,
    controllerAs: 'WeatherCtrl',
    bindings: {
        city: "<"
    }
};