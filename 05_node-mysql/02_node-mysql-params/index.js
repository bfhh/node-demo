const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'
})

con.connect()

//select
const sql = `select *from users;`
//select
/*
const sql = `select ${columnItem} as min,time as mintime from  ${tableName} where ${columnItem}= (select  min(${columnItem})  from ${tableName}  where 1=1 `
sql += `and time BETWEEN ${start.startTime} AND ${end.endTime})`
*/

con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

