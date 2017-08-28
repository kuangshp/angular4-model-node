import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work01Component } from './work01/work01.component';
import {RouterModule} from "@angular/router";
import {workRouterConfig} from "app/work/work.routes";
import { Work02Component } from './work02/work02.component';
import { Work03Component } from './work03/work03.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workRouterConfig)
  ],
  declarations: [
    Work01Component,
    Work02Component,
    Work03Component
  ]
})
export class WorkModule { }
