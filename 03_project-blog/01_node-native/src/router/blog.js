const {getList, getDetail, newBlog, updateBlog, deleteBlog} = require('../../controller/blog')
const {SuccessModel, ErrorModel} = require('../../model/resModel')
const xss = require('xss')
//用户登录验证函数
const loginCheck = (req) => {
    if (!req.session.username) {
        return Promise.resolve(
            new ErrorModel('not login')
        )
    }
}


const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id || ''

    //获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        let author = xss(req.query.author) || ''
        const keyword = xss(req.query.keyword)|| ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)

        //如果是管理员查看自己的博客
        if (req.query.isadmin) {
            const loginCheckResult = loginCheck(req)
            if (loginCheckResult) {
                return loginCheckResult
            }
            author = req.session.username
        }

        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    //博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {

        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
        // const data = getDetail(id)
        //
        // return new SuccessModel(data)
    }


    if (method === 'POST' && req.path === '/api/blog/new') {
        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }

        req.body.author = req.session.username
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        // const result = updateBlog(id, req.body)
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('update blog error')
        // }

        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }


        const result = updateBlog(id, req.body)


        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('update blog error')
            }
        })
    }

    if (method === 'POST' && req.path === '/api/blog/del') {
        const loginCheckResult = loginCheck(req)
        if (loginCheckResult) {
            return loginCheckResult
        }

        const author = req.session.username
        // const result = deleteBlog(id)
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('update blog error')
        // }
        const result = deleteBlog(id, author)
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('update blog error')
            }
        })
    }


}

module.exports = handleBlogRouter