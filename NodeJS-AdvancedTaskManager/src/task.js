export class Task{
    constructor(name, description, status, dueDate){
        this.name = name;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
    };

    displayTask = () =>{
        console.log(`${this.name}+" "+${this.description}+" "+${this.status}+" "+${this.dueDate}+""`);
    };

    markTaskAsComplete = () =>{
        this.status = "completed";
    };

    addTask = () => {

    };

    deleteTask = () => {

    };
    editTask = () =>{
        
    }; 
};