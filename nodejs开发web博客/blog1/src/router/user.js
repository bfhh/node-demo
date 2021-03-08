/*
* 登录接口
* */

const {loginCheck} = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method //GET POST
    const url = req.url
    if (method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body
        const result = loginCheck(username,password)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel("登陆失败")
        // return {
        //     msg: '这是登录的接口'
        // }
    }
}

module.exports = handleUserRouter
