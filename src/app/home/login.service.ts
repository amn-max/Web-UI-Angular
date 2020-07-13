import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import {auth} from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(){
    console.log("Redirecting to google login provider");
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }

  getLoggedInUser(){
    return this.afAuth.authState;
  }
}
