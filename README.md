### 一、本章节仅仅是对`angular4`项目开发中数据请求封装到`model`中
> 仅仅是在项目[angular4项目部署结构](https://github.com/kuangshp/angular2-prop)的基础上扩展了,根据`javaweb`项目开发分层来说命名`service`可能会好点,但是为了不与`angular4`中本身就有的服务想冲突,本人取名为`model`与数据层打交道的

### 二、项目结构
![这里写图片描述](http://img.blog.csdn.net/20170829093427466?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 三、本章节使用到的技术点

* 1、封装了带头部信息的(可能出于安全考虑`CSRF`攻击类的,或者`python-web`开发就必须要带`tockend`头信息)
* 2、简单的封装了`get`和`post`请求的基础模型
* 3、把基础模型的类注入到项目开发中的接口模型中
* 4、`form`表单提交数据仅仅是利用的模板局部变量的方式获取输入框的值
* 5、使用代理解决开发过程中跨域的问题
* 6、使用`express`搭建一个后端服务器
* 7、`node`服务器对`mySQL`数据库的查询与增加数据

### 四、重要代码描述
* 1、基础模型代码的封装

    ```javascript
    import { Injectable } from '@angular/core';
    import { Http, Headers } from '@angular/http';
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/Rx';
    
    @Injectable()
    export class ServiceBaseService {
        constructor(private http: Http) { }
        /**
         * @param {string} url地址
         * @param {any} [options]可选提交的参数
         * @param {any} [header]可选设置的头信息
         * @memberof ServiceBaseService
         * @title: 封装一个get请求的基础类
         */
        getData(url: string, options?: any, myheaders?: any): Observable<any> {
            // 配置请求头
            const myHeaders: Headers = new Headers();
            // tslint:disable-next-line:forin
            for (const key in myheaders) {
                myHeaders.append(key, myheaders[key]);
            };
            url += (url.indexOf('?') < 0 ? '?' : '&') + this.param(options);
            return this.http.get(url, { headers: myHeaders }).map(res => res.json());
        }
    
        /**
         * @param url地址
         * @param options提交的数据
         * @param myheaders可选参数设置头
         * @title:封装一个post请求数据的
         */
        postData(url: string, options: any, myheaders?: any): Observable<any> {
            const myHeaders: Headers = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            // tslint:disable-next-line:forin
            for (const key in myheaders) {
                myHeaders.append(key, myheaders[key]);
            };
            return this.http.post(url, options, { headers: myHeaders });
        }
        /**
         * @param {any} data
         * @returns
         * @memberof ServiceBaseService
         * @title:封装一个序列化get请求的参数的方法
         */
        param(data): string {
            let url = '';
            // tslint:disable-next-line:forin
            for (const k in data) {
                const value = data[k] !== undefined ? data[k] : '';
                url += `&${k}=${encodeURIComponent(value)}`;
            }
            return url ? url.substring(1) : '';
        }
    }
    ```
    
* 2、项目的根目录中创建`proxy.conf.json`解决跨域问题

    ```json
    {
        "/wiseoper/**": {
            "target": "http://localhost:3000",
            "secure": false
        }
    }
    ```
    
* 3、关于代理解决跨域的注意点[请参考](http://blog.csdn.net/kuangshp128/article/details/71909331)
* 4、关于`get`请求获取数据的模型

    ```javascript
    import { Injectable } from '@angular/core';
    import { ServiceBaseService } from 'app/model/service-base.service';
    
    @Injectable()
    export class GetServiceService {
    
        constructor(private serviceBase: ServiceBaseService) { }
        // 获取数据  
        getData() {
            const url = '/wiseoper/';
            return this.serviceBase.getData(url, {name: 'hello', age: 20}, {QQ: '332904234'});
        }
    }
    ```
    
* 5、在组件的`component.ts`中直接调用模型中的方法就可以

    ```javascript
    // 直接调用get请求数据的方法
    getDate(): void {
        this.getService.getData().subscribe(data => {
            console.log(data);
        });
    }
    ```
    
* 6、可以从控制台上查看给请求头添加的内容

### 五、关于`post`请问的封装
* 1、服务器代码

    ```javascript
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
    ```
    
* 2、`angular4`中对`post`请求的封装

    ```javascript
    /**
     * @param url地址
     * @param options提交的数据
     * @param myheaders可选参数设置头
     * @title:封装一个post请求数据的
     */
    postData(url: string, options: any, myheaders?: any): Observable<any> {
        const myHeaders: Headers = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        // tslint:disable-next-line:forin
        for (const key in myheaders) {
            myHeaders.append(key, myheaders[key]);
        };
        return this.http.post(url, options, { headers: myHeaders });
    }
    ```
