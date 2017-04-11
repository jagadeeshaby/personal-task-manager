
export class Task {
  title: string;
  description: string;
  comments: string[];
  id: number;
  type : string = "default"; 

  constructor(task: Object = {}){
    Object.assign(this,task);
  }
}
