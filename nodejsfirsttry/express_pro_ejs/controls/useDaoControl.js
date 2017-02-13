var mysql=require('mysql');
var $conf=require('../config/db.js');
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
	},
	add: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;

			// 建立连接，向表中插入值
			// 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
			connection.query($sql.insert, [param.name, param.age], function(err, result) {
				if(result) {
					result = {
						code: 200,
						msg:'增加成功'
					};    
				}

				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);

				// 释放连接 
				connection.release();
			});
		});
	},
	delete: function (req, res, next) {
		// delete by Id
		pool.getConnection(function(err, connection) {
			var id = +req.query.id;
			connection.query($sql.delete, id, function(err, result) {
				if(result.affectedRows > 0) {
					result = {
						code: 200,
						msg:'删除成功'
					};
				} else {
					result = void 0;
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
	},
	update: function (req, res, next) {
		// update by id
		// 为了简单，要求同时传name和age两个参数
		var param = req.body;
		if(param.name == null || param.age == null || param.id == null) {
			jsonWrite(res, undefined);
			return;
		}

		pool.getConnection(function(err, connection) {
			connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
				// 使用页面进行跳转提示
				if(result.affectedRows > 0) {
					res.render('suc', {
						result: result
					}); // 第二个参数可以直接在jade中使用
				} else {
					res.render('fail',  {
						result: result
					});
				}

				connection.release();
			});
		});

	},
	getByUserId:function(req, res, next){
		pool.getConnection(function(err,connection){
			//获取前台传过来的参数
			var param=(req.query || req.params)?(req.query || req.params):1;

			//建立连接
			connection.query($sql.queryById,function(err,result){
				if(result){
					res.render('users',{name:result[0].username});
				}else{
					res.render('users',{name:'error'});
				}
				console.log(result);
				//jsonGet(res,returndata);
			});
			connection.release();
		})
	}
}