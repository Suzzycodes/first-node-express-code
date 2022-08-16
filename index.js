


/*

const http = require('http');

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
   const urlPath = req.url;

   if (urlPath === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Susan!');

   } else if (urlPath === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the about page!');

   } else if (urlPath === '/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('We are here');

   } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
   }

});

server.listen(port, host, () => {
    console.log(`Running at ${host}: ${port}`);
}); */


/* Make a POST request

const { json } = require('express');
const http = require('http');

const data = JSON.stringify({
    username: 'Susan'
});

const options = {
    hostname: '',
    port: '',
    method: 'POST',
    path: '',
    headers: {
        'Content-Type': 'application/json'
    }
};

const request = http.request(options, (response) => {
    console.log(`Status code: $(response.statusCode)`);
    console.log(`Headers: $(response.headers)`);

    response.on('data', (chunk) => console.log(`Chunk received: $(chunk)`));
});

request.on('error', (err) => console.error(err));

request.write(data);

request.end() */



const http = require('http');

const request = http.get('http://www.google.com', (response) => {
    console.log(`Status code: $(response.statusCode)`);
    console.log(`Headers: $(response.headers)`);

    response.on('data', (chunk) => console.log(`Chunk received: $(chunk)`));
});

request.on('error', (err) => console.error(err));







