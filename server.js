const express = require('express')
const server = express()
const routes = require('./routes/routes')











server.use(routes)


server.listen(5000, () =>{
    console.log('Seridor rodando na porta 5000')
})