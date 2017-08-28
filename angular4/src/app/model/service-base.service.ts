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
