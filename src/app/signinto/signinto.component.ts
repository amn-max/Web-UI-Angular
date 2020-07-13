import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signinto',
  templateUrl: './signinto.component.html',
  styleUrls: ['./signinto.component.css']
})
export class SignintoComponent implements OnInit {

  constructor(private afauth:AngularFireAuth,
              private router:Router,) { }

  ngOnInit(): void {
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
}
