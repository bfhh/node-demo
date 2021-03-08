var express = require('express');
var app = express();
var handerbars = require('express3-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars',handerbars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);

app.get('/',function (req,res) {
    // res.type('text/plain') ;
    // res.status(200);
    // res.send('test success');
    res.render('home');
})


app.get('/about',function (req,res) {
    // res.type('text/plain');
    // res.status(200);    //express
    // res.send('about test success');
    res.render('about');
})

app.use(function (req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found');
})

app.use(function (req,res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 server error');
})



app.listen(app.get('port'),function (){
    console.log("server start on localhost:" + app.get('port'));
})