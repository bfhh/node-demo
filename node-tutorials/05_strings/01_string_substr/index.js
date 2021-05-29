function timestampToYMD(time = Date.now()) {
    const date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 19).replace('T', '').replace(/:/g, '').replace(/-/g, '').trim();
}

console.log(timestampToYMD().substr(0, 12).trim()); // "20210520000017"

//Intercept string