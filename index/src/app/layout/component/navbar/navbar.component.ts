import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('user')) 
    console.log(data)
    this.username = data[0].name
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

}
