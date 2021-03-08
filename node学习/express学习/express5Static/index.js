var express = require('express');
var fortune = require('./lib/fortune');
var weather = require('./weather');
var credentials = require('./credentials');

var app = express();
var formidable = require('formidable');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cookie-parser')(credentials.cookieSecret));

//正常来说视图都是整体的被闭合HTML标签包含的一部分，但是如果想在默认布局中引入一段文本，比如想要在布局header中添加一段引入JQUERY
//的脚本需要加入下面的section函数
var handlebars = require('express3-handlebars').create({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/newsletter', function (req, res) {
    res.render('newsletter', {csrf: 'csrf token goes here'})
})

app.get('/contest/vacation-photo', function (req, res) {
    var now = new Date();
    res.render('contest/vacation-photo', {year: now.getFullYear(), month: now.getMonth()});
});


app.post('/contest/vacation-photo/:year/:month', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) return res.redirect(303, '/error');
        console.log('received fields:');
        console.log(fields);
        console.log('received files:');
        console.log(files);
        res.redirect(303, '/thank-you');
    });
});


app.post('/process', function (req, res) {
    if (req.xhr || req.accepts('json,html') === 'json') {
// 如果发生错误，应该发送 { error: 'error description' }
        res.send({success: true});
    } else {
// 如果发生错误，应该重定向到错误页面
        res.redirect(303, '/thank-you');
    }
});

app.post('/process', function (req, res) {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/thank-you');
});

app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});


app.use(function (req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    //用res.locals可以将局部文件传输给所有的视图,这里返回的数据放在partials.weather对象
    //这里是引入组件,组件定位于需要在不同的视图中使用
    res.locals.partials.weather = weather.getWeatherData();
    next();
});

app.get('/', function (req, res) {
    // res.type('text/plain') ;
    // res.status(200);
    // res.send('test success');
    res.render('home');
})

app.get('/headers', function (req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';
    for (var name in req.headers) s += name + ': ' + req.headers[name] + `\n`;
    res.send(s);
})


app.get('/about', function (req, res) {
    // res.type('text/plain');
    // res.status(200);    //express
    // res.send('about test success');
    res.render('about');
})

//不用布局
//views/layout 中的文件称为布局
//views 中的文件称为视图
app.get('/notuselayout', function (req, res) {
    // res.type('text/plain');
    // res.status(200);    //express
    // res.send('about test success');
    res.render('notUseLayout', {layout: null});
})


//不使用默认布局，使用其他布局
app.get('/main2', function (req, res) {
    // res.type('text/plain');
    // res.status(200);    //express
    // res.send('about test success');
    res.render('notUseLayout', {layout: 'main2'});
})

//
app.get('/jquery', function (req, res) {
    // res.type('text/plain');
    // res.status(200);    //express
    // res.send('about test success');
    res.render('jquerytest', {layout: 'jquery'});
})


//模板引擎增加数组
app.get('/fortune', function (req, res) {
    res.render('fortune', {fortune: fortune.getFortune()});
})


app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found');
})

app.use(function (req, res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 server error');
})


app.listen(app.get('port'), function () {
    console.log("server start on localhost:" + app.get('port'));
})