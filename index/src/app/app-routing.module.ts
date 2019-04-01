import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './_gurds/auth.guard';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './layout/component/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { UserComponent } from './layout/pages/user/user.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './layout/pages/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'edit', component: EditProfileComponent }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
