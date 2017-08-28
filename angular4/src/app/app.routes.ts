/**
 * 定义根路由文件
 */
import {Routes} from '@angular/router';
import {LoginComponent} from 'app/login/login/login.component';
// tslint:disable-next-line:typedef-whitespace
export const rootRouterConfig : Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent //第一次展现在用户面前的页面
    },
    {
        path: 'work',
        loadChildren: './work/work.module#WorkModule' //主入口
    },
    {
        path: 'page',
        loadChildren: './page/page.module#PageModule'
    },
    {
        path: '**',
        component: LoginComponent    //配置路由匹配失败的时候进去登录页面
    }
];