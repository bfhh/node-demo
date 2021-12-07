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
let aliceAge = 100

let bobUserName = "bob"
let bobAge = 200

let obj = [
    [username,aliceAge],
    [bobUserName,bobAge]
]


const sql = "INSERT INTO user (username,age) VALUES ?";
console.log("sql", sql)

con.query(sql,[obj], (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

