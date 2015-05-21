http = require("http");
fs = require("fs");
http.createServer((req,res)->
	fs.readFile('index.html', (error, data)-> 
		res.writeHead(200, 'content-type': 'text/html');
		res.end(data);
		return
	);
	return
).listen(1337, '127.0.0.1');
console.log('Webserver has started at 127.0.0.1:1337');
