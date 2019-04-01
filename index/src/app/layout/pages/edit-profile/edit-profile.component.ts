import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../_services/custom/user.service';
import {Router} from "@angular/router"
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userForm: FormGroup;
  userId;
  pw;

  constructor(fb: FormBuilder, private userService:UserService) { 
    this.userForm = fb.group({
      name: [null, Validators.required],
      location: [null, Validators.required],
      contact: [null, Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])]
    });
  }

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails(){
    let data = JSON.parse(localStorage.getItem('user'));
    let id = data[0].id;
    this.userId = id;
    this.userService.getUserData(id).subscribe(res=>{
      let resp = JSON.parse(res['_body']);
      this.pw = resp.password;
      let data = {
        name : resp.name,
        location :resp.location,
        contact : resp.contact,
        email : resp.email
      }
      this.userForm.setValue(data);
    })
  }
  editUser(data){
    data.id = this.userId;
    data.password = this.pw;
    this.userService.updateUser(data).subscribe(res =>{
      alertify.logPosition('bottom right').log("Updated Complete");
    })
  }

}
