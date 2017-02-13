module.exports={
	mysql:{//数据库连接
		host:"112.74.33.178",
		user:"mashaobin",
		password:"msb911215",
		database:"nodejs",
		port:3306

	},
	port: 3000,//服务器端口号
	  session: {//session: express-session 的配置信息
	    secret: 'myblog',
	    key: 'myblog',
	    maxAge: 2592000000
	  }
}