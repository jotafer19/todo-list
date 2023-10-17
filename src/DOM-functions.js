import Task from "./create-task";

function deleteCurrentTasks() {
    const currentTasks = document.querySelectorAll(".task");
    currentTasks.forEach(task => {
        task.remove();
    })
}

function addNewTask() {
    const newTaskForm = document.querySelector("#new-task-form");
    newTaskForm.classList.toggle("collapse");
    const newTaskButton = document.querySelector("#new-task-add");
    newTaskButton.classList.toggle("collapse");
}

function createNewTask() {
    const newTaskTitle = document.querySelector("#new-task-title").value;
    const newTaskDescription = document.querySelector("#new-task-description").value;
    const newTaskDate = document.querySelector("#new-task-date").value;
    const newTaskPriority = document.querySelector("#new-task-priority").value;
    const newTask = new Task(newTaskTitle, newTaskDescription, newTaskDate, newTaskPriority);
    return newTask;
}

function createProjectOption(newProject) {
    const newTaskProject = document.querySelector("#new-task-project");
    const createOption = document.createElement("option");
    createOption.setAttribute("id", newProject.id);
    createOption.setAttribute("value", newProject.name);
    createOption.textContent = newProject.name
    newTaskProject.appendChild(createOption)
}

function getTaskProject(inbox) {
    const newTaskProject = document.querySelector("#new-task-project").value;
    for (let project of inbox.showAllProjects) {
        if (newTaskProject === project.name) {
            return project;
        }
    }
}

function resetNewTaskForm() {
    const newTaskForm = document.querySelector("#new-task-form");
    newTaskForm.classList.toggle("collapse");
    const newTaskButton = document.querySelector("#new-task-add");
    newTaskButton.classList.toggle("collapse");
    newTaskForm.reset();
}

function submitEditTask(task) {
    task.name = document.querySelector(".edit-task-name").value;;
    task.description = document.querySelector(".edit-task-description").value;
    task.date = document.querySelector(".edit-task-date").value;
    task.priority = document.querySelector(".edit-task-priority").value;
}

export {
    deleteCurrentTasks,
    addNewTask,
    createNewTask,
    createProjectOption,
    getTaskProject,
    resetNewTaskForm,
    submitEditTask
}