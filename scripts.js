//step 1 find the element
var addTaskButton = document.getElementById("add-task")
var addNewTaskInput = document.getElementById("task-input")
var todoListcontainter = document.getElementById("todo-list")

//step 2 write the behaviour
function onAddTaskClicked (event) {
    var taskName = addNewTaskInput.value;
    addNewTaskInput.value = "";
    todoListcontainter.insertAdjacentElementHTML('afterbegin', taskName);
}


//step 3 link the event handler
addTaskButton.addEventListener('click', onAddTaskClicked)