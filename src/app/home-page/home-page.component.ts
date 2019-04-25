import { Component, OnInit } from '@angular/core';
import { DailyTaskService } from './daily-task.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  taskIndex: number = 0;
  date = new Date();
  dailyTasks: any[] = [];

  constructor(private service: DailyTaskService) { 
    this.service.getDailies().subscribe(task => {
      this.dailyTasks = task;
    })
   }

  ngOnInit() {
  }

  leftTask = () => {
    if (this.taskIndex > 0) {
      this.taskIndex--;
    }
  }

  rightTask = () => {
    if (this.taskIndex < this.dailyTasks.length - 1) {
      this.taskIndex++;
    }
  }

  

}
