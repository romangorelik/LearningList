import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.css']
})
export class BigOComponent implements OnInit {
  bigOData: any[] = [{bool: false}, {bool: true}, {bool: false}, {bool: true}, {bool: true}];
  

  constructor() {
  }

  ngOnInit() {
    
  }
  

}
