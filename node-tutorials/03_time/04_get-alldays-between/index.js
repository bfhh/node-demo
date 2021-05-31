const moment = require('moment')

const getDates = (startDate, stopDate) => {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}


daysArray = getDates("20210501","20210521")
console.log(daysArray)