const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'school'
})

con.connect()

let username = "alice"
let age = 100

const sql = `insert into user (username,age) values` + `('${username}',${age})`
console.log("sql", sql)



con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

