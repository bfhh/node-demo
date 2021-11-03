const {UniqueID} = require('nodejs-snowflake');

let config = {
    returnNumber: false, // Defaults to false. If set to true, the returned ids will be of type bigint or else of type string
    customEpoch: 1546300800000, // Defaults to 1546300800000 (01-01-2019). This is UNIX timestamp in ms
    machineID: 3 // A value ranging between 0 - 4095. If not provided then a random value will be used
}

const uid = new UniqueID(config);

const generateID = () => {
    return uid.getUniqueID();
}

let id = generateID()

console.log("id", id)