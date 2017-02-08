var mysql=require('mysql');

//构造module层接口处理数据库数据
var db={};

//启动数据库

db.start=function(){
	//创建数据库连接对象
	var connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'nodejs',
		port:3306
	});
	//连接数据库
	connection.connect(function(err){
		if(err){
			console.log(err);
			return;
		}else{
			console.log('已连接数据库');
		}
	});
}
db.close=function(){
	//关闭数据库
	connection.end(function(err){
		if(err){
			console.log(err);
			return;
		}else{
			console.log('连接关闭');
		}
	})
}
//查询
db.query=function sqlback(sqllan,fn){
	this.start;
	//创建数据库连接对象
	var connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'nodejs',
		port:3306
	});
	//连接数据库
	connection.connect(function(err){
		if(err){
			console.log(err);
			return;
		}else{
			console.log('已连接数据库');
		}
	});
	var sql=sqllan;
	if(!sql) return;
	//查询数据库
	connection.query(sql,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		fn(rows);
	});
	this.close;
	
}

module.exports=db;