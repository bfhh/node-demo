function sleep() {
    let delay = 10000
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}