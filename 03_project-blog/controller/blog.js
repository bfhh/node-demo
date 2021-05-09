//获取博客列表
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1620552356759,
            author: 'zs'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1620552356760,
            author: 'ls'
        }
    ]
}

//根据id获取博客详情
const getDetail = (id) => {
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1620552356759,
        author: 'zs'
    }
}


const newBlog = (blogData = {}) => {
    console.log('newBlog blogData...', blogData)
    return {
        "id": 4
    }
}


//更新博客
const updateBlog = (id, blogData = {}) => {
    console.log('updateBlog blogData...', id, blogData)
    return true
}

//删除博客
const deleteBlog = (id) => {
    console.log('deleteBlog blogData...', id)
    return true
}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}