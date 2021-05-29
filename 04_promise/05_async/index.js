async = require('async')

const getData = (name,time) => {
    return new Promise((resolve, reject) => {
        sleep()
        console.log('getData name', name)
        resolve(name)
    })
}

function sleep() {
    let delay = 1000
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}

async.parallel({
    one: function(callback) {
        getData("1",5000).then(data=>{
            callback(null,"1")
        })
    },
    two: function(callback) {
        getData("2",1000).then(data=>{
            callback(null,"2")
        })
    }
}, function(err, results) {
    console.log(results)
});

async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 2000);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 1000);
    }
}, function(err, results) {
    console.log(results)
});


