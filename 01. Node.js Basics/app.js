// imports
const http = require('http');
// importing custom file
const routes = require('./routes');

// creating a server
const server = http.createServer(routes);

server.listen(3000);