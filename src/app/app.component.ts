import { Component } from '@angular/core';
import {Task} from './task';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskDataService]
})
export class AppComponent {
 
  newTask: Task = new Task();

  taskTypes: string[] = ["Work","Personal","Others"]

  constructor(private taskDataService: TaskDataService){};

  addTask(){
    this.taskDataService.addTask(this.newTask);
    this.newTask = new Task();
  };

  deleteTask(task){
    this.taskDataService.deleteTask(task.id);
  };

  get typeKeys(){
     return Object.keys(this.taskDataService.getTasksByType());
  }

  get tasksByType(){
    return this.taskDataService.getTasksByType()
  };

  get tasks(){
    return this.taskDataService.getAllTasks();
  };

  addToBasket(){
    console.log("Dnd")
  }

}
