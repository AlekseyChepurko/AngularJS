export function UserService() {
    OAuth.initialize('7lwNrKTGBwoFHrTzZskH499XxkA');

    let isAuth = sessionStorage.getItem("isAuth") || false;
    let tokenDeadline = parseInt(sessionStorage.getItem("tokenDeadline")) || 0;

    this.isAuth = () => {
        if (Date.now() < tokenDeadline && isAuth) {
            return true
        }
        isAuth = false;
        return false;
    };

    let data = null;
    this.getUserData = () => data;

    let error = null;
    this.getAuthError = () => error;

    this.loginVK = () => {
        OAuth.popup('vk')
            .done(doneCallback)
            .fail(function (err) {
                error = err;
            });
    };

    const doneCallback = (result) => {
        data = result;
        tokenDeadline = data.expires_in + Date.now();
        isAuth = true;
        sessionStorage.setItem("isAuth", "true");
        sessionStorage.setItem("tokenDeadline", tokenDeadline.toString());
    };
}