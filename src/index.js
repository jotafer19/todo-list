import "./style.css"
import Task from "./create-task";
import Project from "./create-project";
import GroupProjects from "./group-projects";
import { loadPage, createProjectDiv, createTaskDiv, editTask } from "./create-display";
import { deleteCurrentTasks, addNewTask, createNewTask, createProjectOption, getTaskProject, resetNewTaskForm, submitEditTask } from "./DOM-functions";

const task1 = new Task("gym", "in the morning", "2023-11-02", "High");
const task2 = new Task("play dice throne", "with Dr Strange", "2023-10-21", "Medium");
const project1 = new Project("Project 1");
const project2 = new Project("Project 2");
const inbox = new GroupProjects();


project1.addTask(task1)
project2.addTask(task2)

inbox.addProject(project1)
inbox.addProject(project2)

loadPage(inbox);

// INBOX BUTTON
const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {
    deleteCurrentTasks();
    const checkProjects = document.querySelectorAll(".project");
    checkProjects.forEach(project => {
        if (project.classList.contains("active")) {
            project.classList.toggle("active");
        }
    })
    inboxButton.classList.toggle("active");
    inbox.showTasks.forEach(task => {
        tasksDisplay.append(createTaskDiv(task));
    })
})

// PROJECT
const projectsDisplay = document.querySelector("#projects-display");
projectsDisplay.appendChild(createProjectDiv(project1))
projectsDisplay.appendChild(createProjectDiv(project2))
projectsDisplay.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(inbox.showAllProjects)
    projectsDisplay.childNodes.forEach(child => {
        if (child !== event.target && child.classList.contains("active")) {
            child.classList.toggle("active");
        }
    })
    for (let project of inbox.showAllProjects) {
        if (event.target.dataset.id === project.id && !event.target.classList.contains("active")) {
            console.log(project.showProject)
            event.target.classList.toggle("active");
            deleteCurrentTasks();
            project.showProject.forEach(task => {
                const changeTask = createTaskDiv(task);
                tasksDisplay.appendChild(changeTask)
            })
        }
    }
})  

// DELETE PROJECT

// NEW PROJECT BUTTON
const newProjectButton = document.querySelector("#new-project");
newProjectButton.addEventListener("click", () => {
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");
})

for (let project of inbox.showAllProjects) {
    createProjectOption(project)
}

// SUBMIT NEW PROJECT BUTTON
const submitNewProjectButton = document.querySelector("#new-project-submit");
submitNewProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newProjectName = document.querySelector("#new-project-name").value;
    const newProject = new Project(newProjectName);
    inbox.addProject(newProject)
    projectsDisplay.appendChild(createProjectDiv(newProject));
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");

    createProjectOption(newProject);
})

// TASK
const tasksDisplay = document.querySelector("#tasks-display");
tasksDisplay.addEventListener("click", event => {
    if (event.target.className === "task-main") {
        event.target.nextElementSibling.classList.toggle("collapse");
    }
    if (event.target.className === "task-main-left" || event.target.className === "task-main-right") {
        event.target.parentElement.nextElementSibling.classList.toggle("collapse");
    }
})

// NEW TASK BUTTON
const newTaskButton = document.querySelector("#new-task-add");
newTaskButton.addEventListener("click", () => {
    addNewTask();
})

// SUBMIT NEW TASK BUTTON
const submitNewTaskButton = document.querySelector("#new-task-submit");
submitNewTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = createNewTask();
    const newTaskDisplay = createTaskDiv(newTask);
    const selectedProject = getTaskProject(inbox);
    selectedProject.addTask(newTask);
    if (document.querySelector(".active").dataset.id === selectedProject.id || 
    document.querySelector("#inbox").classList.contains("active")) {
        document.querySelector("#tasks-display").appendChild(newTaskDisplay);
    }
    resetNewTaskForm();
})

// DELETE TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList = "delete-icon task-icon") {
        const targetedTask = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTask.getAttribute("id")) {
                inbox.deleteTask(task);
                targetedTask.remove()
            }
        }
    }
})
