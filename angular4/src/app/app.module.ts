import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from 'app/login/login/login.component';
import {rootRouterConfig} from 'app/app.routes';
import {RouterModule} from '@angular/router';
import { ServiceBaseService } from 'app/model/service-base.service';
import { GetServiceService } from 'app/model/get-service.service';
import { PostServiceService } from 'app/model/post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [
    ServiceBaseService,
    GetServiceService,
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
