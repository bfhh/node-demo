function timestampToYMD(time=Date.now()) {
    const date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 19).replace('T', '').replace(/:/g, '').replace(/-/g, '').trim();
}
console.log(timestampToYMD(1621440017000)); // "20210520000017"