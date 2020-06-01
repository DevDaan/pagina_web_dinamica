const express = require('express')

const routes = express.Router()


routes.get('/', (req, res) =>{
   res.render('about')
})


routes.get('/videos', (req, res) =>{
    res.render('videos')
})


module.exports = routes