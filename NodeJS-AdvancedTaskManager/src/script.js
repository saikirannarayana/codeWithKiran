console.log("script.js file invoked");

window.onButtonClick = function() {
    const textEntered =document.getElementById('task-input');
    console.log(textEntered.value);
    addToTheElementList(textEntered.value);
}

const addToTheElementList = (item) =>{
    const ulElement = document.getElementById('task-list');

    // const divElement = document.createElement('div');
    // divElement.innerHTML= item;
    ulElement.appendChild(listElement(item));

    // const buttonElement = document.createElement('button');
    const textElement = document.getElementById('task-input');
    textElement.value="Enter a task";
};

const listElement = (item) =>{
    const divElement1 = document.createElement('div');
    const li = document.createElement('li');
    const buttonElement = document.createElement('button');
    divElement1.id= item;
    buttonElement.innerHTML='Remove';

    // const task = new task(item,item+"completed",'pending',Date.now());
    //  console.log(task);
    buttonElement.addEventListener('click',()=>{
        const ulElement = document.getElementById('task-list');
        const ulElements = document.getElementsByTagName('li');
        const parentElement = buttonElement.parentElement;
        parentElement.remove();
        console.log(ulElements);
    });
    divElement1.append(li);
    li.innerHTML= item;
    divElement1.append(buttonElement);
    divElement1.append(editTaskComponent());
    
    return divElement1;
};

const editTaskComponent = () =>{
    const checkboxElement = document.createElement('input');
    checkboxElement.type='checkbox';
    checkboxElement.addEventListener('click',checkboxBoxEventListener)
    return checkboxElement;
};

const checkboxBoxEventListener = () =>{
    
};