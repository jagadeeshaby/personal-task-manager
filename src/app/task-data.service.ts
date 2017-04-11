import { Injectable } from '@angular/core';

import { Task } from './task'

@Injectable()

export class TaskDataService {

  id: number = 0;

  key: string = "TaskList"

  tasks: Task[] = [];

  constructor() {
   let tasks = this.getAllTasks();
   this.tasks = tasks;
   this.id = this.uniqueId();
   console.log(this.id);
  }

  uniqueId(): number{
    return Date.now();
  }

  updateLocalStorage(){
    localStorage.setItem(this.key,JSON.stringify(this.tasks)); 
  }

  getTasksFromLocalStorage(): Task[]{
    let tasks = localStorage.getItem(this.key);
    if(tasks){
      return JSON.parse(localStorage.getItem(this.key));
    }else{
      return [];
    } 
  }

  addTask(task: Task): TaskDataService{
    if(!task.id){
      task.id = this.uniqueId();
    }

    console.log(this.id);
    this.tasks.push(task);
    this.updateLocalStorage();
    return this;
  }

  deleteTask(id: number): TaskDataService{
    this.tasks = this.tasks.filter((task)=>task.id !== id)
    this.updateLocalStorage();
    return this;
  }

  getTasksByType(): Object{
    let groups = {};

    let allTasks = this.getAllTasks();

    for (let task of allTasks) {
      if(!groups[task.type]){
        groups[task.type] = [];
      }
      groups[task.type].push(task);
    }

    return groups;
  }

  getAllTasks(): Task[]{
    return this.getTasksFromLocalStorage();
  }

}
