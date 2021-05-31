const moment = require('moment')

//根据传入的日期获取所有的月份
const getMonthBetween = (start, end) => {//传入的格式YYYY-MM
    start = start.substr(0, 4) + "-" + start.substr(4, 2)
    end = end.substr(0, 4) + "-" + end.substr(4, 2)
    const result = [];
    let s = start.split("-");
    const e = end.split("-");
    const min = new Date();
    const max = new Date();
    let yearMonthCode;
    let yearMonth;
    min.setFullYear(s[0], s[1] * 1 - 1, 1);//开始日期
    max.setFullYear(e[0], e[1] * 1 - 1, 1);//结束日期
    var curr = min;
    while (curr <= max) {
        yearMonthCode = moment(curr).format('YYYYMM')
        var month = curr.getMonth();
        var year = curr.getFullYear();

        var str = curr.getFullYear() + "-" + (month);
        s = curr.getFullYear() + "-0";
        if (str == s) {
            str = curr.getFullYear() + "-1";
        }
        var m = month + 1
        result.push(yearMonthCode.toString().trim(),
        );
        curr.setMonth(month + 1);
    }
    return result;
}


const MAX_DATE = 30

const getLastThirty = (arr = []) => {
    if (arr.length < 30) {
        return arr
    }
    let start = arr.length-30
    return (arr.slice(start, arr.length))

}

let months = (getMonthBetween('201604', '202012'))
console.log("all months", months)

let month = getLastThirty(months)
console.log("month", month)
