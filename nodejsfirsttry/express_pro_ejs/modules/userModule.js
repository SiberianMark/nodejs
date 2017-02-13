var user={
	insert:'INSERT INTO user(userid,userid,username,sex,remark) values(0,?,?,?)',
	update:'update user set username=?, sex=?, remark=? where userid=1',
	delete:'delete from user where id=?',
	queryById:'select * from user where userid=1',
	queryAll:'select * from user'
};
module.exports=user;