var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $sql= require('../modules/userModule.js');

//使用连接池提高性能

var pool =mysql.createPool($conf.mysql);

var jsonGet=function(res,ret){
	if(typeof ret ==='undefined'){
		res.json({
			code:'0',
			msg:'操作失败'
		})
	}else{
		res.json(ret);
	}
}
module.exports={ 
	get:function(req,res,next){
		pool.getConnection(function(err,connection){
			//获取前台传过来的参数
			var param=req.query || req.params;

			//建立连接
			connection.query($sql.queryAll,function(err,result){
				if(result){
					var returndata={
						code:"200",
						msg:"请求成功",
						data:result
					}
				}
				jsonGet(res,returndata);
			});
			connection.release();
		})
	}
}