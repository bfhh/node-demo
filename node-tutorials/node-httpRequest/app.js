const axios = require('axios')

axios
    .post('http://localhost:3000/tx/send', {
        receiver: '1',
        value: '2',
        privateKey: '3',
        gasLimit: '4',
        gasPrice: '5'
    })
    .then(res => {
       console.log(res.data)
    })
    .catch(error => {

    })