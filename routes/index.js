let express = require('express');

let routes = express.Router();

routes.get('/', (req,res)=> {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá Mundo</h1>');

    console.log('URL: ' + req.url);
    console.log('METHOD:', req.method);
});

module.exports = routes;