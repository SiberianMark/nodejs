//nodejs创建一个简单的服务器
var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World \n');
}).listen(3000,"127.0.0.1");
console.log('server running at http://127.0.0.1:3000');