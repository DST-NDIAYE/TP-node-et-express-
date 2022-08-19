const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send(" bienvenue sur mon application  ")
    res.render('home') ;
})

router.get('/api', (req, res) => {
    // res.sendFile( __dirname + '/index.html')
    res.render('index' , {title: 'Bienvenue sur mon application'}) ;
    
})

router.get('/form', (req, res) => {
    // res.sendFile( __dirname + '/index.html')
    res.render('form' ) ;
    
})

router.port('/form', (req, res) =>{
    req.body
})


module.exports = router;