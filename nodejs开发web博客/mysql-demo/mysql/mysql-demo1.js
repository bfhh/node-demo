const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始链接
con.connect()

//查询语句
let getSql = 'select * from `21`;'

//插入语句
let insertSql = 'INSERT INTO `21` (time, um, usm, im, pfs, ps, qs, ss, d, wpp, wqp, `hash`, height ) VALUES ' +
    `( 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 10000, 'base641', 5 );`

var powerData = {
    time: 123,
    um: 10000,
    usm: 10000,
    im: 10000,
    pfs: 10000,
    ps: 10000,
    qs: 10000,
    ss: 10000,
    d: 10000,
    wpp: 10000,
    wqp: 10000,
    hash: '123',
    height: 600
}

let time = powerData.time
const um = powerData.um
const usm = powerData.usm
const im = powerData.im
const pfs = powerData.pfs
const ps = powerData.ps
const qs = powerData.qs
const ss = powerData.ss
const d = powerData.d
const wpp = powerData.wpp
const wqp = powerData.wqp
const hash = powerData.hash
const height = powerData.height

tableName = 21
//插入数据
//这里不知道为什么数字形式的表格一定要这种拼接方式
const insertSql2 = 'insert into`' + `${tableName}` + '` (time, um, usm, im, pfs, ps, qs, ss, d, wpp, wqp, hash, height ) values' + `(${time},${um},${usm},${im},${pfs},${ps},${qs},${ss},${d},${wpp},${wqp},'${hash}',${height})`

//查询语数据
let querySql = 'select * from`' + `${tableName}` + '`where 1=1 '

if (time) {
    time = 202103081830
    querySql += `and time='${time}'`
}

//查询总数
let countSql = 'select count(id) from `' + `${tableName}` + '`where 1=1'

//根据hash查询高度
let txHash = `vf2ESzpXQj/TkbGh0IUNNeLz5AwYRunNi5AyA1/Y05k=`
let sql = 'select height from `' + `${tableName}` + '`where 1=1 '
if (hash) {
    sql += `and hash='${txHash}'`
}

//分页查询
pageSize = 3
pageNumber = 5
let pageSql = 'select * from `' + `${tableName}` + '`where 1=1 '
let start = (pageNumber - 1) * pageSize
pageSql += `Limit ${start},${pageSize}`

con.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    //获取数量
    //   console.log(result[0]['count(id)'])

})
