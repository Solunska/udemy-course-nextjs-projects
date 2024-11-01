const fs = require('fs');

const requestHandler = (req, res) => {
    
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // we have to end it so we prevent an error if the lines keep executing
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        // the data event its fired whenever a new chunk is ready to be read
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // we need to buffer the chunks now
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // this has to be here so it doesnt run too early
            // with the synchronous mode (writeFileSync), we block execution of the next line of code until this file is done (Blocking Code)
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // This is non-blocking because fs.writeFile is an asynchronous function.
            // It initiates writing to the file but does not wait for it to complete 
            // before moving on to the next lines of code.
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;