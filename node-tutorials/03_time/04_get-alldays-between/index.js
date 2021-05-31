const moment = require('moment')

const getDays = (start, stop) => {
    const dateArray = [];
    let currentDate = moment(start);
    let stopDate = moment(stop);
    while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}


daysArray = getDays("20210501","20210521")
console.log(daysArray)