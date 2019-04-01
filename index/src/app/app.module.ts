import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './layout/component/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { UserComponent } from './layout/pages/user/user.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

//sevices
import { CommonService } from './_services/common.service';
import { UserService } from './_services/custom/user.service';

//guards
import {AuthGuard} from './_gurds/auth.guard';
import { EditProfileComponent } from './layout/pages/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LayoutComponent,
    DashboardComponent,
    UserComponent,
    SignupComponent,
    HomeComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
