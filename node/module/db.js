/**
 * @author:水痕
 * @time:2017-07-13 15:16
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:db
 * @title:数据库的配置
 */
'use strict';
const mysql = require("mysql");

/**
 * 将整个方法全部暴漏出去
 * @param sql sql语句
 * @param arg 传递到sql语句中的参数，可以不写
 * @param callback 回调函数，可以不写
 */
module.exports = function (sql,arg,callback) {
    //1.创建连接
    let config = mysql.createConnection({
        host:"localhost", //数据库的地址
        user:"root", //数据库用户名
        password:"root", //数据库密码
        port:"3306", //mysql数据库的端口号
        database:"cms" //使用那个数据库
    });
    //2.开始连接数据库
    config.connect();
    //3.对数据库的增删改查操作
    config.query(sql,arg,(err,data)=>{
        callback && callback(err,data);
    })
    //4.关闭数据库
    config.end();
}
