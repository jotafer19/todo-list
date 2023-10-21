import "./style.css"
import Task from "./create-task";
import Project from "./create-project";
import GroupProjects from "./group-projects";
import { format } from 'date-fns'
import { loadPage, createProjectDiv, createTaskDiv } from "./create-display";
import { deleteCurrentTasks, addNewTask, createNewTask, createProjectOption, getTaskProject, resetNewTaskForm, getStorageProject, getEditingTask } from "./DOM-functions";


const project1 = new Project("Project 1");
const project2 = new Project("Project 2");
const task1 = new Task("gym", "in the morning", "2023-11-02", "High", project1.id);
const task2 = new Task("play dice throne", "with Dr Strange", "2023-10-21", "Medium", project2.id);
console.log(task1)

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
    if (document.querySelector("#today-tasks").classList.contains("active") ||
    document.querySelector("#week-tasks").classList.contains("active")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    if (!inboxButton.classList.contains("active")) {
        document.querySelector(".active").classList.toggle("active");
        inboxButton.classList.toggle("active");
    }
    inbox.showTasks.forEach(task => {
        tasksDisplay.append(createTaskDiv(task));
    })
})

// PROJECT
const projectsDisplay = document.querySelector("#projects-display");
projectsDisplay.appendChild(createProjectDiv(project1))
projectsDisplay.appendChild(createProjectDiv(project2))
projectsDisplay.addEventListener("click", (event) => {
    if (event.target.classList.contains("project") || event.target.classList.contains("project-name-container") || 
    event.target.classList.contains("edit-icon")) {
        if (document.querySelector("#inbox").classList.contains("active")) {
            document.querySelector("#inbox").classList.toggle("active");
        }
        if (document.querySelector("#today-tasks").classList.contains("active") ||
        document.querySelector("#week-tasks").classList.contains("active")) {
            document.querySelector("#new-task-add").classList.toggle("collapse");
        }
        projectsDisplay.childNodes.forEach(child => {
            if (child !== event.target && child.classList.contains("active")) {
                child.classList.toggle("active");
            }
        })
        let projectSelection;
        if (event.target.classList.contains("project")) {
            projectSelection = event.target;
        } else if (event.target.classList.contains("project-name-container")) {
            projectSelection = event.target.parentElement;
        } else if (event.target.classList.contains("edit-icon")) {
            projectSelection = event.target.parentElement.parentElement;
        }
    
        for (let project of inbox.showAllProjects) {
            if (projectSelection.dataset.id === project.id && !projectSelection.classList.contains("active")) {
                projectSelection.classList.toggle("active");
                deleteCurrentTasks();
                project.showProject.forEach(task => {
                    const changeTask = createTaskDiv(task);
                    tasksDisplay.appendChild(changeTask)
                })
            }
        }
    }
})  

// DELETE PROJECT
projectsDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("delete-icon")) {
        const targetedProject = event.target.parentElement.parentElement;
        for (let project of inbox.showAllProjects) {
            if (project.id === targetedProject.dataset.id) {
                inbox.deleteProject(project);
                targetedProject.remove();
                console.log(inbox.showAllProjects)
                console.log(inbox.showTasks)
                deleteCurrentTasks();
                inboxButton.classList.toggle("active");
                inbox.showTasks.forEach(task => {
                    tasksDisplay.append(createTaskDiv(task));
                })
            }
        }
    }
})

// EDIT PROJECT
projectsDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon")) {
        const targetedProject = event.target.parentElement.parentElement;
        for (let project of inbox.showAllProjects) {
            if (project.id === targetedProject.getAttribute("data-id")) {
                const editProjectForm = document.querySelector("#edit-project-form");
                document.querySelector("#edit-project-name").value = project.name
                editProjectForm.classList.toggle("collapse")
                targetedProject.classList.toggle("collapse")
                targetedProject.classList.toggle("editing-project")
                projectsDisplay.insertBefore(editProjectForm, targetedProject)
            }
        }
    }
})

const editProjectSubmitButton = document.querySelector("#edit-project-submit");
editProjectSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const editProjectForm = document.querySelector("#edit-project-form");
    const editingProject = document.querySelector(".editing-project");
    console.log(editingProject)
    for (let project of inbox.showAllProjects) {
        if (project.id === editingProject.dataset.id) {
            project.name = document.querySelector("#edit-project-name").value;
            editingProject.firstChild.textContent = project.name;
            editProjectForm.classList.toggle("collapse")
            editingProject.classList.toggle("collapse")
            editingProject.classList.toggle("editing-project")

            document.querySelectorAll("#new-task-project > option").forEach(option => {
                if (option.value === project.id) {
                    option.textContent = project.name
                }
            })

            document.querySelectorAll("#edit-task-project > option").forEach(option => {
                if (option.value === project.id) {
                    option.textContent = project.name
                }
            })
        }
    }
})

// NEW PROJECT BUTTON
const newProjectButton = document.querySelector("#new-project");
newProjectButton.addEventListener("click", () => {
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");
})

for (let project of inbox.showAllProjects) {
    createProjectOption(project)
    const newProjectOption = document.createElement("option");
    newProjectOption.setAttribute("value", project.id);
    newProjectOption.textContent = project.name;
    document.querySelector("#edit-task-project").appendChild(newProjectOption)
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
    document.querySelector("#new-project-form").reset();

    createProjectOption(newProject);
    const newProjectOption = document.createElement("option");
    newProjectOption.setAttribute("value", newProject.name);
    newProjectOption.textContent = newProject.name;
    document.querySelector("#edit-task-project").appendChild(newProjectOption)
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
    const selectedProject = getTaskProject(inbox, newTask);
    selectedProject.addTask(newTask);
    if (document.querySelector(".active").dataset.id === selectedProject.id || 
    document.querySelector("#inbox").classList.contains("active")) {
    // document.querySelector("#tasks-display").appendChild(newTaskDisplay);
        deleteCurrentTasks();
        if (document.querySelector("#inbox").classList.contains("active")) {
            inbox.showTasks.forEach(task => {
                tasksDisplay.append(createTaskDiv(task));
            })
        } else {
            selectedProject.showProject.forEach(task => {
                tasksDisplay.appendChild(createTaskDiv(task));
            })
        }
    }
    resetNewTaskForm();
})

// DELETE TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("delete-icon")) {
        const targetedTask = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTask.getAttribute("id")) {
                inbox.deleteTask(task);
                targetedTask.remove();
                console.log("Task deleted")
            }
        }
    }
})

// EDIT TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon")) {
        const targetedTaskDiv = event.target.parentElement.parentElement.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTaskDiv.getAttribute("id")) {
                const editDialog = document.querySelector("#edit-task-dialog");
                targetedTaskDiv.classList.toggle("editing-task");
                editDialog.showModal();
                document.querySelector("#edit-task-name").value = task.name;
                document.querySelector("#edit-task-description").value = task.description;
                document.querySelector("#edit-task-date").value = task.date;
                document.querySelector("#edit-task-priority").value = task.priority;
                document.querySelector("#edit-task-project").value = getStorageProject(inbox, task).id;
            }
        }
    }
})

function newProjectStorage(myNewStorage) {
    for (let project of inbox.showAllProjects) {
        if (project.id === myNewStorage) {
            return project;
        }
    }
}

const editTaskSubmitButton = document.querySelector("#edit-task-submit");
editTaskSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const editingTask = getEditingTask(inbox);
    const originalProject = getStorageProject(inbox, editingTask)
    const newProject = newProjectStorage(document.querySelector("#edit-task-project").value);
    if (newProject !== originalProject) {
        originalProject.deleteTask(editingTask);
        newProject.addTask(editingTask);
    }
    editingTask.name = document.querySelector("#edit-task-name").value;
    editingTask.description = document.querySelector("#edit-task-description").value;
    editingTask.date = document.querySelector("#edit-task-date").value;
    editingTask.priority = document.querySelector("#edit-task-priority").value;
    editingTask.project = document.querySelector("#edit-task-project").value;
    console.log(editingTask)
    if (document.querySelector("#inbox").classList.contains("active") || 
    document.querySelector(".project.active").dataset.id === editingTask.project) {
        deleteCurrentTasks();
        if (document.querySelector("#inbox").classList.contains("active")) {
            inbox.updateTasks;
            inbox.showTasks.forEach(task => {
                tasksDisplay.append(createTaskDiv(task));
            })
        } else {
            newProject.updateProject;
            newProject.showProject.forEach(task => {
                tasksDisplay.appendChild(createTaskDiv(task));
            })
        }
    }
    document.querySelector("#edit-task-dialog").close();
})

// TODAY TASKS
const todayTasks = document.querySelector("#today-tasks");
todayTasks.addEventListener("click", () => {
    if (!document.querySelector("#new-task-add").classList.contains("collapse")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    if (!todayTasks.classList.contains("active")) {
        document.querySelector(".active").classList.toggle("active");
        todayTasks.classList.toggle("active");
    }
    deleteCurrentTasks();
    inbox.showTasks.forEach(task => {
        if (format(new Date(task.date), "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")) {
            tasksDisplay.appendChild(createTaskDiv(task));
        }
    })
})

// THIS WEEK TASKS
const thisWeekTasks = document.querySelector("#week-tasks");
thisWeekTasks.addEventListener("click", () => {
    if (!document.querySelector("#new-task-add").classList.contains("collapse")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    if (todayTasks.classList.contains("active")) {
        document.querySelector(".active").classList.toggle("active");
        thisWeekTasks.classList.toggle("active");
    }
    deleteCurrentTasks();
    const today = new Date();
    today.setHours(0, 0, 0, 0)
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    inbox.showTasks.forEach(task => {
        const taskDate = new Date(task.date);
        if (taskDate >= today && taskDate <= nextWeek) {
            tasksDisplay.appendChild(createTaskDiv(task));
        }
    })
})