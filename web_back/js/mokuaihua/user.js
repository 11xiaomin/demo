
var baseUrl = 'http://localhost:8000/';

var user = {
    login: function (myName, myPassword, callback) {
        $.post(baseUrl + 'admin/login',
            { user_name: myName, password: myPassword },
            function (res) {
                // console.log(res);
                callback(res);

            })
    },
    logout: function (callback) {
        $.post(baseUrl + 'admin/logout', function (res) {
            callback(res);
        })
    },
    getInfo: function (callback) {
        $.get(baseUrl + 'admin/getuser', function (res) {
            callback(res);
        })
    }
}