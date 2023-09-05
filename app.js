// let app = require("express");
// let express = app();

// express.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// express.listen(3000, () => {
//   console.log(`Example app listening on port 3000`)
// })

const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});