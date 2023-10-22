import editIcon from "./images/edit_icon.svg";
import deleteIcon from "./images/delete_icon.svg";
import { changeTaskDisplayTitle } from "./DOM-functions";

function loadPage(inbox) {
    document.querySelector("#inbox").classList.toggle("active");
    changeTaskDisplayTitle("Inbox")
    inbox.showTasks.forEach(task => {
        document.querySelector("#tasks-display").appendChild(createTaskDiv(task));
    })
}

function createTaskDiv(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", task.id);
    taskDiv.setAttribute("data-date", task.date);

    const unnamedContainer = document.createElement("div");
    unnamedContainer.classList.add("task-info");

    const taskMainInfo = document.createElement("div");
    taskMainInfo.classList.add("task-main");

    const taskMainLeft = document.createElement("div");
    taskMainLeft.classList.add("task-main-left");
    taskMainLeft.textContent = task.name;

    const taskMainRight = document.createElement("div");
    taskMainRight.classList.add("task-main-right");
    taskMainRight.textContent = task.date;

    unnamedContainer.append(taskMainLeft, taskMainRight);

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("task-icons");
    const myEditIcon = new Image();
    myEditIcon.src = editIcon;
    myEditIcon.classList.add("edit-icon");
    myEditIcon.classList.add("task-icon");
    const myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("task-icon");

    iconsContainer.append(myEditIcon, myDeleteIcon);

    taskMainInfo.append(unnamedContainer, iconsContainer);

    const taskAdditionalInfo = document.createElement("div");
    taskAdditionalInfo.classList.add("task-additional");
    taskAdditionalInfo.classList.add("collapse");
    taskAdditionalInfo.textContent = task.description;
    
    taskDiv.append(taskMainInfo, taskAdditionalInfo);

    return taskDiv;
}

function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("data-id", `${project.id}`)
    const projectNameContainer = document.createElement("div");
    projectNameContainer.classList.add("project-name-container");
    projectNameContainer.textContent = project.name;
    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("project-icons");
    const myEditIcon = new Image();
    myEditIcon.src = editIcon;
    myEditIcon.classList.add("edit-icon");
    myEditIcon.classList.add("project-icon");
    const myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("project-icon");
    iconsContainer.append(myEditIcon, myDeleteIcon);
    projectDiv.append(projectNameContainer, iconsContainer);

    return projectDiv;
}

export { loadPage, createTaskDiv, createProjectDiv }