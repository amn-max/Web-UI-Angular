import { FirebaseService } from './../../firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.css']
})
export class Article1Component implements OnInit {


  titles:Array<any>;

  constructor(
    private fireService: FirebaseService,
  ) { }



  ngOnInit(): void {
    this.gettitles();
  }

  gettitles(){
    this.fireService.read_titles().subscribe(result=>{
      this.titles = result.map(r=>r.payload.doc.data())
    })
  }


}
