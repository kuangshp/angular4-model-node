import {Work01Component} from "app/work/work01/work01.component";
import {Work02Component} from "app/work/work02/work02.component";
import {Work03Component} from "app/work/work03/work03.component";
export const workRouterConfig = [
    {
        path:"",
        component:Work01Component,
        children:[
            {path:"",redirectTo:"work02",pathMatch:"full"},
            {path:"work02",component:Work02Component},
            {path:"work03",component:Work03Component},
            {path:"page",loadChildren:"./../page/page.module#PageModule"}
        ]
    },
    {
        path:"page1",
        loadChildren:"./../page/page.module#PageModule"
    }
];

