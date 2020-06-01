const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes/routes')

const server = express()


// configurando middlewares
server.use(express.static('public')) //transformando a pasta public para utilizar arquivos estáticos




//configurando o nunjucks
server.set("view engine", "html")
nunjucks.configure('views', {
    express: server
})


// chamando as rotas
server.use(routes)


//iniciando o servidor
server.listen(5000, () =>{
    console.log('Seridor rodando na porta 5000')
})