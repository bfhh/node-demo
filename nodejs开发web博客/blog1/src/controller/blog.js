const getList = (author, keyword) => {
    //先返回数据(正确格式)
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1614751929816,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1614751929824,
            author: 'zhangsan'
        }
    ]
}

//返回博客详情
const getDetail = (id) => {
    return {
        id: 1,
        title: '博客详情',
        content: '博客详情',
        createTime: 1614751929816,
        author: 'zhangsan'
    }
}

//默认应该是(blogData)
//blodData={}是ES6的一个新语法，做了一个兼容，没有值传一个空的对象
const newBlog = (blodData = {}) => {
    //blogData是一个博客对象
    console.log('blogData: ', blodData)
    return {
        id: 3 //表示新建博客，插入到数据表里面的数据
    }
}

//更新博客
const updateBlog = (id, blogData = {})=>{
    console.log('update blog',id,blogData)
    return true
}

//删除blog
const deleteBlog = (id) => {
    return  true
}



//之前都是返回一个函数，但是这里返回一个对象，因为要向外暴露多个函数，可以扩展

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}