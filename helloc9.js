var c9_port = process.env.C9_PORT;
var c9_host = '0.0.0.0';
/* Can access from http://helloc9.wuminqi.cloud9ide.com */

var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World\n');
//}).listen(c9_port,c9_host);
}).listen(12265,'127.0.0.1');

console.log("Server runnint at the url you know");
