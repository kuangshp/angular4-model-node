'use strict';
const express = require("express");
const app = express();
//引入关于post提交数据的
const bodyParser = require("body-parser");

//设置用来接收json格式的数据
app.use(bodyParser.json());
//设置接收任何数据类型
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",require("./router/index"));
app.listen(3000);