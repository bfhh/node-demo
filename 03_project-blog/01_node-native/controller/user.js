const {exec,escape} = require('../db/mysql')
const {genPassword} = require('../util/cryp')

const login = (username, password) => {
    username = escape(username)
    password = genPassword(password)
    password = escape(password)
    // return username === 'zs' && password === '123'
    const sql = `
        select username,realname from users where username=${username} and password=${password}
    `
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}

module.exports = {
    login
}