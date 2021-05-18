var express = require('express');
var router = express.Router();
const {getList, getDetail, newBlog, updateBlog, deleteBlog} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')


/* GET home page. */
router.get('/list', function (req, res, next) {
    let author = req.query.author || ''
    const keyword = req.query.keyword || ''

    //如果是管理员查看自己的博客
    //
    if (req.query.isadmin){
        author = req.session.username
    }
    const result = getList(author, keyword)
    return result.then(listData => {
        res.json(new SuccessModel(listData))
    })

});

router.get('/detail', function (req, res, next) {
    res.json({
        errno: 0,
        data: 'ok'
    })
});


module.exports = router;
