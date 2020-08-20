const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()


server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

server.set("view engine", "njk")
server.use(routes)
nunjucks.configure("views", {
    express:server,
    autoescape:false
})


server.listen(5000, function(){
    console.log('server is runing')
})