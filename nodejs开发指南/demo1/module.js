function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    }
    this.seyHello = function () {
        //建议字符串都用单写
        console.log(' hello '+ name);
    }
}


//在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身
module.exports =Hello;