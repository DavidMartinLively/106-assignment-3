
let listTasks = [];

function Task(description,priority){
    this.title=description;
    this.priority=priority;
}


let inputPractice = document.getElementById('txtPractice');
let selectPriority = document.getElementById('selPriority');
let task="";

function register(){
    let newTask = new Task(inputPractice.value,selectPriority.value);
    listTasks.push(newTask);
    display(newTask);
    inputPractice.value="";//clearing the input
    inputPractice.className="error";
}

function display(aTask){
    let tasksSection = document.getElementById("tasks");//getting the HTML element
    task += `<tr><td class="title">${aTask.title}
    </td>
    
    <td class="priority"> ${aTask.priority} </td></tr>`;//create the task html element
    tasksSection.innerHTML=task;//injecting the task into the html
}