import { LoginService } from './../home/login.service';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { Component, OnInit, NgModule } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import 'firebase/auth';
import {Router} from '@angular/router';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.afauth.getRedirectResult().then(result =>{
      if(result.user != undefined){
        this.router.navigate([''])
      }
    });
  }

  SignUp(email, password) {
    return this.afauth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
    }

  LoginInGoogle(){
    console.log("Login");
    this.service.login();
  }

  SignIn(email, password) {
    return this.afauth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}



