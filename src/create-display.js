import editIcon from "./assets/images/edit_icon.svg";
import deleteIcon from "./assets/images/delete_icon.svg";
import { changeTaskDisplayTitle, createProjectOption } from "./DOM-functions";
import Project from "./create-project";

function loadPage(inbox) {
    document.querySelector("#inbox").classList.toggle("active");
    changeTaskDisplayTitle("Inbox")
    if (localStorage.getItem("inbox")) {
        const a = JSON.parse(localStorage.getItem("inbox"))
        console.log(a._allProjects)
        a._allProjects.forEach(project => {
            console.log(project)
            Object.defineProperty(project, "name", {
                get: function() {
                    return this._name;  
                },
                set: function(value) {
                    this._name = value;
                }
            })
            Object.defineProperty(project, "id", {
                get: function() {
                    return this._id;  
                }
            })
            Object.defineProperty(project, "showProject", {
                get: function() {
                    return this._project;  
                }
            })
            Object.defineProperty(project, "showTasks", {
                get: function() {
                    const projectTasks = [];
                    for (let task of this._project) {
                        projectTasks.push(task);
                    }
                    return projectTasks;
                }
            })
            Object.defineProperty(project, "updateProject", {
                get: function() {
                    this._project.sort(function compare(a, b) {
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);
                        return dateA - dateB;
                    })
                }
            })
            project.addTask = function(task) {
                this._project.push(task);
                this._project.sort(function compare(a, b) {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA - dateB;
                })
            }
            project.deleteTask = function(task) {
                this._project.splice(this._project.indexOf(task), 1);
            }
            inbox.addProject(project);
            createProjectOption(project);
            const newProjectOption = document.createElement("option");
            newProjectOption.setAttribute("value", project.id);
            newProjectOption.textContent = project.name;
            document.querySelector("#edit-task-project").appendChild(newProjectOption);
            document.querySelector("#projects-display").appendChild(createProjectDiv(project))
            project.showProject.forEach(task => {
                Object.defineProperty(task, "name", {
                    get: function() {
                        return this._name;  
                    },
                    set: function(value) {
                        this._name = value;
                    }
                })
                Object.defineProperty(task, "description", {
                    get: function() {
                        return this._description;  
                    },
                    set: function(value) {
                        this._description = value;
                    }
                })
                Object.defineProperty(task, "date", {
                    get: function() {
                        return this._date;  
                    },
                    set: function(value) {
                        this._date = value;
                    }
                })
                Object.defineProperty(task, "priority", {
                    get: function() {
                        return this._priority;  
                    },
                    set: function(value) {
                        this._priority = value;
                    }
                })
                Object.defineProperty(task, "project", {
                    get: function() {
                        return this._project;  
                    },
                    set: function(value) {
                        this._project = value;
                    }
                })
                Object.defineProperty(task, "id", {
                    get: function() {
                        return this._id;
                    }
                })
                document.querySelector("#tasks-display").appendChild(createTaskDiv(task))

            })
        })
    if (inbox.showAllProjects.length === 0) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    }
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
    taskMainInfo.setAttribute("data-priority", task.priority)

    const checkTask = document.createElement("input");
    checkTask.classList.add("task-done");
    checkTask.setAttribute("type", "checkbox");

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

    taskMainInfo.appendChild(unnamedContainer);

    const taskAdditionalInfo = document.createElement("div");
    taskAdditionalInfo.classList.add("task-additional");
    taskAdditionalInfo.classList.add("collapse");
    taskAdditionalInfo.textContent = task.description;
    
    taskDiv.append(checkTask, taskMainInfo,     iconsContainer, taskAdditionalInfo);

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