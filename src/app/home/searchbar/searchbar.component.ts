import { FirebaseService } from './../../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/


import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{

  constructor(private fireService:FirebaseService){}
  titles:Array<any>;
  InputText:string;
  ngOnInit(){
    this.gettitles();
  }

  gettitles(){
    this.fireService.read_titles().subscribe(result =>{
      this.titles = result.map(r=>r.payload.doc.data())
      console.log(this.titles);
    })
  }

  myNav:any;
  input:any;
  openSearch(){
    this.myNav = document.getElementById('myNav');
    this.myNav.style.width='100%';
    this.input = document.getElementById('input');
    this.input.value="";
    this.input.focus();
  }

  closeSearch(){
    this.myNav = document.getElementById('myNav');
    this.myNav.style.width="0";
    console.log(this.InputText);
  }
}
