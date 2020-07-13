import { Component, OnInit } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  scrolltotop(){
    window.scrollTo(0,0);
  }

}
