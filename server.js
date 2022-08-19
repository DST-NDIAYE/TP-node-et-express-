const express = require('express');

const app = express();

const MyRouter = require('./routes/index.route')

app.use(express.static('public')) ;

const port = 3000;

app.use('/' , MyRouter)

app.use('/api' , MyRouter)

app.use('/form' , MyRouter)

app.set('view engine', 'twig') ;


app.listen(port, () => {

    console.log('listen on port ' + port);
})
