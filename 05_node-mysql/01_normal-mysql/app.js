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
const sql = ""




const insertSql = `insert into block_tx (block_height, tx_hash, account_from, account_to, timestamp) values` + `(${block_height},'${tx_hash}','${from}','${to}',${timestamp})`
console.log("sql", insertSql)



con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

