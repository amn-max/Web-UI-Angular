import { FirebaseService } from './../../firebase.service';
import { from, Subscriber } from 'rxjs';
/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/

import {AngularFireDatabase} from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare let $ : any;

@Component({
  selector: 'app-latest-proj',
  templateUrl: './latest-proj.component.html',
  styleUrls: ['./latest-proj.component.css']
})
export class LatestProjComponent implements OnInit {

  titles:Array<any>;
  col:number=3;
  constructor(private router: Router,
    private db: AngularFireDatabase,
    private fireService: FirebaseService,
    ) {
   this.columnResize();
  }

  columnResize(){
    if (window.innerWidth < 950) {
      this.col = 2;
    }

   if (window.innerWidth > 950) {
      this.col = 3;
    }

  if (window.innerWidth < 750) {
       this.col = 1;
    }

  }



  ngOnInit() {
    this.gettitles();
  }
  gettitles(){
    this.fireService.read_titles().subscribe(result =>{
      this.titles = result.map(r=>r.payload.doc.data())
      console.log(this.titles);
    })
  }



  onResize(event) {
    const element = event.target.innerWidth;

    if (element < 950) {
      this.col = 2;
    }

    if (element > 950) {
      this.col = 3;
    }

    if (element < 750) {
      this.col = 1;
    }
  }

}

