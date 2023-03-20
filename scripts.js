//step 1 find the element
var addTaskButton = document.getElementById("add-task")
var addNewTaskInput = document.getElementById("task-input")
var todoListcontainter = document.getElementById("todo-list")
var templateContainer = document.getElementById("list-otem-template")
var template = templateContainer.innerHTML

//step 2 write the behaviour
function onAddTaskClicked (event) {
    var taskName = addNewTaskInput.value;
    addNewTaskInput.value = "";
    var taskHTML = template.replace("<-- TASK_NAME -->", taskName)
    todoListcontainter.insertAdjacentElementHTML('afterbegin', taskHTML);
}

function onTodoListContainer.insertAdjacentElementHTML(event){
    while(!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.remove("completed")
    } else {
        targetElement.classList.remove("completed")
    }
}

//step 3 link the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListcontainter,addEventListener('click', onAddTaskClicked)