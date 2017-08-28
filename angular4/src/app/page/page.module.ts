import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import {RouterModule} from "@angular/router";
import {pageRoutes} from "app/page/page.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ],
  declarations: [
    Page1Component
  ]
})
export class PageModule { }
