const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status 200 OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Test Website for Nodejs...!!! Already Tested. This is a simple nodejs and simple pipeline for the task\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
