

import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/custom/user.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService:UserService, private router: Router) {
    this.userForm = fb.group({
      name: [null, Validators.required],
      location: [null, Validators.required],
      contact: [null, Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      repeatpassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  signUpUser(userdata) {
    console.log(userdata)
    this.userService.signUpUser(userdata).subscribe(res=>{
      if(res['ok']){
        this.router.navigate(['/login'])
      }
    })
  }

}

