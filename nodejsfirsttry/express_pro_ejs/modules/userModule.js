var user={
	insert:'INSERT INTO user(userid,userid,username,sex,remark) values(0,?,?,?)',
	update:'update user set username=?, sex=?, remark=? where userid=?',
	delete:'delete from user where id=?',
	queryById:'select * from user where id=?',
	queryAll:'select * from user'
};
module.exports=user;