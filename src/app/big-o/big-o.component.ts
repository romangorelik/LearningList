import { Component, OnInit } from '@angular/core';
import { BigOService } from './big-o.service';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.css']
})
export class BigOComponent implements OnInit {
  bigOData: any[] = [];
  newestEntry: {} = {};
  

  constructor(private service: BigOService) {
    this.service.getBigO().subscribe(bigO => {
      this.bigOData = bigO;
      this.newestEntry = this.bigOData[this.bigOData.length]
    })

    console.log(this.newestEntry)
  }

  ngOnInit() {
    
  }
  

}


