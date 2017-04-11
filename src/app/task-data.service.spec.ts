/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskDataService } from './task-data.service';
import { Task } from './task';

describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should ...', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllTask()',() => {

    it("Should written empty array", inject([TaskDataService],(service: TaskDataService) => {
       expect(service.getAllTasks()).toEqual([]);
    }));


    it("Should add task", inject([TaskDataService],(service: TaskDataService) => {

      console.log("Welocme")

      let task = new Task({
        title: "ABC App";
        description: "Create a Personal task manager";
        comments: ["Learn Angular CLI", "Learn Typescript", "Create components","Done"]
      });

      console.log("task");

      service.addTask(task);
      expect(service.getAllTasks()).toEqual([task]);

    }));



  });

});
