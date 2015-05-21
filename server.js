var fs, http;

http = require("http");

fs = require("fs");

http.createServer(function(req, res) {
  fs.readFile('index.html', function(error, data) {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.end(data);
  });
}).listen(1337, '127.0.0.1');

console.log('Webserver has started at 127.0.0.1:1337');
