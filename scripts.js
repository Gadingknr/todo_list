/*  Step 1: locate DOM element and assign to a JavaScript variable*/
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    todoListContainer.insertAdjacentHTML('afterbegin', taskName);
    }
    
/* Step 3 make the event trigger our functions*/
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);