
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
        console.log(item.name);
        // this.tasks.pop;
        // console.log(this.tasks);
        console.log("delete this item");
        
    };

    sortTasksByStatus = () =>{

    };

    sortTasksByDueDate = () =>{
        console.log(this.tasks);
        // this.tasks.forEach((task)=>{
        //     console.log(task.dueDate);
        // });
        //sorting the array 

        this.tasks.sort((task1, task2)=>{
            return (task1.dueDate - task2.dueDate)*(-1);
        });

        this.tasks.forEach((task)=>{
            console.log(task.name);
        });
    };
};