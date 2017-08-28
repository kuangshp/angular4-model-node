/**
 * @author:水痕
 * @time:2017-07-13 14:21
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:03_router
 * @title:
 */
'use strict';
const express = require("express");
const router = express.Router();
//引入数据库文件
const db = require("./../module/db");

router.get('/wiseoper',(req, res) => {
    db('select * from book order by id desc',(err,data)=>{
        if(err){
            throw new Error(err);
        }
        if(data){
            let obj = {
                info:'sussess',
                code:200,
                data
            }
            res.json(obj);
        }
    })
})


router.get('/wiseoper/book',(req, res) => {
    db('select * from book order by id desc',(err,data)=>{
        if(err){
            throw new Error(err);
        }
        if(data){
            let obj = {
                info:'sussess',
                code:200,
                data
            }
            res.json(obj);
        }
    })
})

router.post("/wiseoper/register",(req,res)=>{
    //如果是post提交数据就用req.body接收
    console.log(req.body);
    db("insert into cms_user(username,password) values(?,?)",[req.body.username,req.body.password],(err,data)=>{
        console.log(err);
        if (err){
            res.json({
                code:0,
                info:"注册失败"
            });
        }
        console.log(data);
        if (data){
            res.json({
                code:1,
                info:"注册成功"
            });
        }
    })
});

module.exports = router;
