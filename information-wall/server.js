const express = require('express');
const apiRoute = require('./routes/api.js')
const PORT = 3333;

const server = express();

server.use('/api', apiRoute);


server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})