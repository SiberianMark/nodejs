var express=require('express');
var app=express();
var port = 3000;
var ip= "127.0.0.1";
app.listen(port,ip);//ip参数不填默认本机

app.get('/',function(res,req){//路由函数
	res.send("Hello World\n");
});

app.get('/user',function(res,req){
	res.send("hello user\n");
});

app.get('/one',function(res,req){
	res.send("hello one\n");
})

app.get('/user/:id',function(res,req){
	res.send("hello "+req.params.id);
});

console.log("start express server\n");