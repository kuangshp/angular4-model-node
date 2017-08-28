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
