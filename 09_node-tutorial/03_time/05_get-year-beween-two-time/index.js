//获取所有的年份
const getYearBetween = (startTime, endTime) => {
    let years = []
    if ((startTime === '') || (endTime === '')) {
        return (new Date).getFullYear()
    }

    const start = startTime.toString().substr(0, 4).trim()
    const end = endTime.toString().substr(0, 4).trim()

    for (let i = start; i <= end; i++) {
        years.push(i.toString())
    }

    return years
}

console.log(getYearBetween(19451202, 20251032))