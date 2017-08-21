export default function WeatherService($http, $rootScope){
    this.currentCity = "Sankt-Peterburg";
    this.setCurrentCity = (city = "Sankt-Peterburg" ) => {
        this.currentCity = city;
        this.fetchWeather()
    };
    this.weatherData = {};
    this.fetchWeather = () => {
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}`;
        const query = {
            method: 'GET',
            url: url,
            params: {
                appid: 'd32d12cb93f8cb057c194e4046069594'
            }

        };
        $http(query).then(res => {
            this.weatherData = res.data;
            $rootScope.$broadcast('weather-data-changed', res.data);
        })
    };
    this.getWeatherData = () => {
        return this.weatherData;
    };
}