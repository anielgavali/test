const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader('content-Type','text/html');
  res.write('<html><h1>hellow from node</h1></html>');
  res.end();
});

server.listen(3000);
