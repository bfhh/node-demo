const schedule = require('node-schedule');
const http = require('http');
//启动定时器
const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob(' */1 * * * *', () => {
        console.log(1)
        // console.log('scheduleCronstyle:' + new Date());
    });
}

scheduleCronstyle()

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(9000);