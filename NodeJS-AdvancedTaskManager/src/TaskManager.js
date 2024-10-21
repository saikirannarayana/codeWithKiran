
import { Task } from "./task.js";
export class TaskManager{
    constructor(){
        this.tasks =[];
    };

    addTask = (name, description, status, dueDate) =>{
        console.log(name, description, status, dueDate);
        const newTask = new Task(name, description , status, dueDate);
        this.tasks.push(newTask);
        console.log(newTask.displayTask()+" new task added");
    };

    displayTasks = () =>{
        console.log(this.tasks);
    };

    deleteTask = (item) =>{
        this.tasks.pop;
        console.log(this.tasks);
        console.log("delete this item");
        
    };
};