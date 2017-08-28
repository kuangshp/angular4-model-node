import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'app/model/get-service.service';
import { PostServiceService } from 'app/model/post-service.service';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
    private isColor: boolean;
    private bookList: Array<any> = [];
    constructor(private getService: GetServiceService, private postService: PostServiceService) { }

    ngOnInit() {
        this.isColor = true;
    }
    // 直接调用get请求数据的方法
    getDate(): void {
        this.getService.getData().subscribe(data => {
            console.log(data);
            if (data.info === 'sussess') {
                this.bookList = data.data;
            }
        });
    }
    // 直接调用post提交数据的方法
    submitForm(username: any, password: any): void {
        const user = username.value;
        const pass = password.value;
        this.postService.postData({
            username: user,
            password: pass,
        }).subscribe(data => {
            console.log(data);
        });
    }
}
