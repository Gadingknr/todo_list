//step one find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active");
var showAllButton = document.getElementById("show-all");
var showCompletedButton = document.getElementById("show-completed")
var templateElement = document.getElementById("list-item-template");

var template = templateElement.innerHTML;

// step 2 write the behaviour

function saveTask(name, isCompleted){
    localStorage.setItem(name, isCompleted)
}


function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    saveTask(taskName, false)
}

function onTodolistClicked(event) {
    var targetElement = event.target;
    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
    var taskNameElement = targetElement.querySelector('.task-name');
    if (taskNameElement){ 
        var taskName = taskNameElement.innerText;
        saveTask(taskName, checkbox.checked)
        //the homework need to be fix
    }
}

function showAlltasks() {
    var tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++){
        tasks[i].style.display = "block"
    }
}

function showCompletedTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function showActiveTask() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "block";
        }
    }
}

function renderTask(){
    for (i = 0; i < localStorage.length; i++){

        var taskName = localStorage.key(i)
        var isCompleted = localStorage.getItem(taskName) == "true";
        var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
        if (!isCompleted){
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
        }
    }
}
// step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);
showActiveButton.addEventListener('click', showActiveTask);
showAllButton.addEventListener('click', showAlltasks);
showCompletedButton.addEventListener('click', showCompletedTasks)

renderTask();