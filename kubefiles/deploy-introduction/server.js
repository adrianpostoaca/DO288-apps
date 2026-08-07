const http = require('http');
const hostname = '0.0.0.0';
const port = 4000;

// Read from environment variable OR default to 'Hello World'
const responseMessage = process.env.RESPONSE_MSG || 'Hello World';

const server = http.createServer((req, res) => {
  if (req.url === '/livez') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK\n');
  } else if (req.url === '/readyz') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK\n');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${responseMessage}\n`); // Use the dynamic variable here
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
