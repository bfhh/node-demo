const {login} = require('../../controller/user')
const {SuccessModel, ErrorModel} = require('../../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method
    if (method === 'GET' && req.path === '/api/user/login') {
        // const {username, password} = req.body
        const {username, password} = req.query
        // const result = login(username, password)
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('login error')
        // }
        const result = login(username, password)
        return result.then(userData => {
            if (userData.username) {
                req.session.username = userData.username
                req.session.realname = userData.realname
                console.log('req session is ', req.session)
                return new SuccessModel()
            }
            return new ErrorModel('login error')
        })
    }

    //登录测试demo
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(new SuccessModel(
                {
                    username: req.cookie.username
                }
            ))
        }
        return Promise.resolve(new ErrorModel('not login'))
    }
}

module.exports = handleUserRouter