import { Router } from '@angular/router';
import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,private router : Router) { }

  ngOnInit(): void {
  }

  contact(fullName,email,phoneNo,message){
    this.firebaseService.createUser(fullName,email,phoneNo,message);
  }

}
