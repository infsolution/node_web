const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
server.set("view engine", "njk")
server.use(express.static("public"))

nunjucks.configure("views",{
    express: server
})

server.get("/", function(req, res){
    return res.render("home")
})
server.get("/cards", function(req, res){
    return res.render("cards")
})
server.listen("5000", function(){
    console.log("server is run")
})