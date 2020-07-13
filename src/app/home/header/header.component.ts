import { LoginService } from './../login.service';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/


import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: firebase.User;

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      this.user = user;
    })
  }

  LoginInGoogle(){
    this.service.login();
  }

  logout(){
    this.service.logout();
  }

  scrolltotop(){
    window.scrollTo(0,0);
  }


}
