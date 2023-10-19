import Task from "./create-task";
import { createTaskDiv } from "./create-display";

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
    if (!document.querySelector("#inbox").classList.contains("active")) {
        const allOptions = document.querySelectorAll("#new-task-project > option");
        allOptions.forEach(option => {
            if (option.value === document.querySelector(".active").getAttribute("data-id")) {
                option.setAttribute("selected", "selected")
            }
        })
    }
}

function createNewTask() {
    const newTaskTitle = document.querySelector("#new-task-title").value;
    const newTaskDescription = document.querySelector("#new-task-description").value;
    const newTaskDate = document.querySelector("#new-task-date").value;
    const newTaskPriority = document.querySelector("#new-task-priority").value;
    const newTaskProject = document.querySelector("#new-task-project").value;
    const newTask = new Task(newTaskTitle, newTaskDescription, newTaskDate, newTaskPriority, newTaskProject);
    console.log(newTask)
    return newTask;
}

function createProjectOption(newProject) {
    const newTaskProject = document.querySelector("#new-task-project");
    const createOption = document.createElement("option");
    createOption.setAttribute("value", newProject.id);
    createOption.textContent = newProject.name
    newTaskProject.appendChild(createOption)
}

function getTaskProject(inbox, task) {
    for (let project of inbox.showAllProjects) {
        if (project.id === task.project) {
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

function getStorageProject(inbox, task) {
    for (let project of inbox.showAllProjects) {
        if (project.showProject.includes(task)) {
            return project;
        }
    }
}

function getEditingTask(inbox) {
    const editingTaskDiv = document.querySelector(".editing-task");
    for (let task of inbox.showTasks) {
        if (task.id === editingTaskDiv.getAttribute("id")) {
            return task;
        }
    }
}

export {
    deleteCurrentTasks,
    addNewTask,
    createNewTask,
    createProjectOption,
    getTaskProject,
    resetNewTaskForm,
    getStorageProject,
    getEditingTask,
}