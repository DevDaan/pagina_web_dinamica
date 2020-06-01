const express = require('express')
const videos = require('../data')
const routes = express.Router()


routes.get('/', (req, res) =>{

    const about = {
        name: "Daniel Vieira",
        role: "Analista de Suporte | Estudante de programação",
        description: "Estudando intensamente para me tornar um desenvolvedor web full stack. Apaixonado por <span>JavaScript</span>",
        links: [
            {name: "GitHub", url: "https://github.com/DevDaan/"},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-do-n-vieira/"}
        ]
    }
    res.render('about', {about})
})


routes.get('/videos', (req, res) =>{
    res.render('videos', {items: videos})
})

routes.get('/video', (req, res) =>{
    const id = req.query.id

    const video = videos.find(video =>{
        return video.id == id
    })

    if(!video){
        res.send('Video not found')
    }

    
    return res.render('video', {item: video})

})


module.exports = routes