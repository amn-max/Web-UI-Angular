/* Modified and developed By Ayush Naik
   https://github.com/CyberWorrior
*/


import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})



export class SideBarComponent implements OnInit {
  sidebar:boolean;
  toggleSidebar(){
    this.sidebar = document.getElementById("sidebar").classList.toggle("active");
  }





  constructor() { }

  ngOnInit(): void {
  }

}


