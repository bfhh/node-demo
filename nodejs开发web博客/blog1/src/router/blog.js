const {getList, getDetail, newBlog, updateBlog, deleteBlog} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')


const httpBlogHandleFunc = (req, res) => {
    const method = req.method
    const id = req.query.id
    //获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        //不存在就返回空
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
        // return {
        //     msg: '这是获取博客列表的接口'
        // }
    }


    //获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
        // return {
        //     msg: '这是获取博客详情的接口'
        // }
    }

    //新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }


    //更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        // return {
        //     msg: '这是更新博客的接口'
        // }
        const result = updateBlog(id, req.body)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失败')
        }
    }

    //删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const result = deleteBlog(id)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }

        // return {
        //     msg: '这是删除博客的接口'
        // }
    }
}

module.exports = httpBlogHandleFunc
