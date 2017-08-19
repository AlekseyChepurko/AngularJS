angular.module('myApp', ['angular-oauth2'])
    .run(['OAuth', function(OAuth) {
        OAuth.configure({
            baseUrl: 'https://www.googleapis.com/auth/adwords',
            clientId: '510983164184-qhk9d92o82f50ubkvducp4fl9j31jf8c.apps.googleusercontent.com',
            clientSecret: '3v2NOmUYMq7ad18S36Q_VO7j' // optional
        });
    }])

    .component('someComponent', {
        controller: (OAuth) => {
            OAuth.getAccessToken({
                username: 'google account',
                password: 'password'
            }).then(data => {
                console.log("data",data);
            });
            console.log(OAuth.isAuthenticated());
        },
        controllerAs: "someCtrl",
        template: '<div>some component</div>'
    });
