module.exports = function (app) {
    app.get('/加密解密测试', function (req, res) {
        res.send('hello world');
    });

    app.get('/add', function (req, res) {
        res.send("add");
    })

    app.get('/custom', function (req, res) {
        res.send("custom");
    })
}


