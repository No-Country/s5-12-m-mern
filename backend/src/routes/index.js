const express = require('express')
const router = express.Router()
const fs = require('fs')

const path = __dirname
const files = fs.readdirSync(path)

files.forEach(file => {
    let fileName = file.split('.').shift()
    console.log(fileName)
    if (fileName !== 'index'){ 
        router.use(`/${fileName}`, require(`${path}/${file}`))
    }
})

module.exports = router