const http = require('http');
//get 请求外网
http.get('http://localhost:8001/test', function (req, res) {
    var html = '';
    req.on('data', function (data) {
        html += data;
    });
    req.on('end', function () {
        console.log(html)
    });
});