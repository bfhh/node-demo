const baseStr = 'NkR6hS8Y9K+IRbitGXqq0oL3nFGvbwJwj70m9uUmFX8='

const hexStr = Buffer.from(baseStr).toString('hex')
console.log('hex',hexStr)


const base64Str =  Buffer.from(hexStr).toString('base64')
console.log('base64',baseStr)