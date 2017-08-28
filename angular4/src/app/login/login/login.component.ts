import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private myForm:FormGroup;
  private localName:string;
  private localPassword:string;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.myForm = fb.group({
      username:[this.localName],
      password:[this.localPassword],
      isSave:[true]
    })
  }

  ngOnInit() {
  }
  postFormDate(val:any){
    console.log("你输入的信息是:",val);
    if(val.username=='admin' && val.password=="123456"){
      if(val.isSave){
        //如果记住的密码就设置本地存储
        localStorage.setItem(this.localName,val.username);
        localStorage.setItem(this.localPassword,val.password);
      }
      localStorage.clear();
      //登录成功页面跳转到work路由
      this.router.navigateByUrl("work");
    }
  }
}
