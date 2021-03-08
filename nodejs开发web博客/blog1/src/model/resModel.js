class BaseModel {
    //要求data是个对象类型，然后message是个字符串类型
    //如果data是个字符串类型也需要兼容
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}


//因为我们的目标是要返回一个标准的errno等于多少，
class SuccessModel extends BaseModel {
    constructor(data, message) {
        //表示要执行继承的BaseModel的constructor函数代码
        super(data, message);
        this.errno = 0
    }
}


class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}