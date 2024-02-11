const express = require('express');
let routesIndex = require('./routes/index.js');//.js is optional
let routesUsers = require('./routes/users.js');//.js is optional

let app = express();

app.use(routesIndex);
app.use('/users', routesUsers);

app.listen(3000, '127.0.0.1', ()=>{

    console.log('Server up!');

});