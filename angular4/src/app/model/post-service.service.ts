import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'app/model/service-base.service';

@Injectable()
export class PostServiceService {

    constructor(private serviceBase: ServiceBaseService) { }
    postData(options) {
        const url = '/wiseoper/register/';
        return this.serviceBase.postData(url, options, {QQ: 332904234});
    }
}
