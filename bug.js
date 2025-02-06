const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: forgetting to end the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  // Missing res.end() here will lead to a hanging request
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});