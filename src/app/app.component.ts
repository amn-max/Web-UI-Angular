import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginService } from './home/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  [x: string]: any;

  constructor(
    private afAuth:AngularFireAuth,
    private routes:Router,
  ){}


  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.routes.navigate(['']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}

