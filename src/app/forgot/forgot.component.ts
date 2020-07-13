import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  resetpass(Email){
    return this.afauth.sendPasswordResetEmail(Email)
      .then((result)=>{
        window.alert("Password Reset Email Sent Successfullyy");
      }).catch((error)=>{
        window.alert(error.message)
      })
  }

}
