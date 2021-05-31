const moment = require('moment');

// console.log(moment('20210602').startOf('month').format('YYYYMMDD')); //
// console.log(moment('20210612').endOf('month').format('YYYYMMDD')); //
//
// console.log(moment('20210605').startOf('year').format('YYYYMMDD')); //
// console.log(moment('20190305').endOf('year').format('YYYYMMDD')); //


const getYearFirstLastDay = (time) => {
    let yearRes = {}
    yearRes.startTime = (moment().startOf('year').format('YYYYMMDD'))
    yearRes.endTime = (moment().endOf('year').format('YYYYMMDD'))
    return yearRes
}

const getMonthFirstLastDay = (time) => {
    let monthRes = {}
    monthRes.startTime = (moment(time).startOf('month').format('YYYYMMDD'))
    monthRes.endTime = (moment(time).endOf('month').format('YYYYMMDD'))
    return monthRes
}