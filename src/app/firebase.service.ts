import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore ,private router: Router) { }

  createUser(fullName,email, phoneNo,message){
    alert("Your Message Has Been Uploaded");
    this.router.navigateByUrl("");
    return this.afs.collection('contactMe').add({
      name: fullName,
      email: email,
      phoneNo: parseInt(phoneNo),
      message: message
    });
  }


  read_titles() {
    return this.afs.collection('Articles').snapshotChanges();
  }
}
