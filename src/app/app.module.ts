import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FollowerTrainComponent } from './follower-train/follower-train.component';
import { FollowForFollowComponent } from './follow-for-follow/follow-for-follow.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FollowerTrainComponent,
    FollowForFollowComponent,
    HomeInfoComponent,
    MyProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
