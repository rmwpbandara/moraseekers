import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/custom/user.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService:UserService, private router: Router) {
    this.userForm = fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {

  }

  loginUser(userdata) {
    console.log(userdata)
    this.userService.loginUser(userdata).subscribe(res=>{
      let data =JSON.parse(res['_body']) 

      console.log(data);
    
      
      if(data.length > 0){
        localStorage.setItem('user',res['_body'])
        this.router.navigate(['/layout'])
      }
    })
  }

}
