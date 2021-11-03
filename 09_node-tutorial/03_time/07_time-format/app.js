//20201225134500  ->  2020-12_id-25 13:45:00


const timeFormatListData = (time) => {
    const timeStr = time.toString();
    let year = timeStr.substr(0, 4)
    let month = timeStr.substr(4, 2)
    let day = timeStr.substr(6, 2)
    let hour = timeStr.substr(8, 2)
    let minute = timeStr.substr(10, 2)
    let second = timeStr.substr(12, 2)
    let formatTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    return formatTime
}

let time = timeFormatListData(20201225134500 )

console.log("format time",time)