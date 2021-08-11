
const obj = {
    name : 'kobe',
    age : 41
}

Object.keys(obj).forEach(function (key) {
    console.log("key:", key);
    console.log("value:", obj[key]);
});
