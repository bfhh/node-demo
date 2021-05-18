const redis = require('03_project-blog/01_node-native/db/redis')
const {REDIS_CONF} = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
    console.error(err)
})

function set(key, val) {
    if (typeof val === 'object') {
        val = JSON.parse(val)
    }
    redisClient.set(key, val, redis.print)
}

function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }

            if (val == null) {
                resolve(err)
                return
            }

            try {
               resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }

        })
    })
}