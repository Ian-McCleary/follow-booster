import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowForFollowComponent } from './follow-for-follow/follow-for-follow.component';
import { FollowerTrainComponent } from './follower-train/follower-train.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  { path: 'followertrain', component: FollowerTrainComponent},
  { path: 'followforfollow', component: FollowForFollowComponent},
  { path: 'home', component: HomeInfoComponent},
  { path: 'myprofile', component: MyProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
