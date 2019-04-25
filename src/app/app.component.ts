import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataStructures: boolean = false;

  stateDataStructures = () => {
    this.dataStructures = !this.dataStructures;
  }
}
