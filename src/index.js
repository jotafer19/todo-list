import "./style.css"
import Task from "./create-task";
import Project from "./create-project";
import GroupProjects from "./group-projects";
import { format, getOverlappingDaysInIntervals } from 'date-fns'
import { loadPage, createProjectDiv, createTaskDiv } from "./create-display";
import { deleteCurrentTasks, addNewTask, createNewTask, createProjectOption, getTaskProject, resetNewTaskForm, getStorageProject, getEditingTask, changeTaskDisplayTitle } from "./DOM-functions";

const inbox = new GroupProjects("inbox");
loadPage(inbox)

// INBOX BUTTON
const inboxButton = document.querySelector("#inbox");
inboxButton.addEventListener("click", () => {
    deleteCurrentTasks();
    changeTaskDisplayTitle("Inbox");
    if (inbox.showAllProjects.length === 0 && !document.querySelector("#new-task-add").classList.contains("collapse")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    if (document.querySelector("#today-tasks").classList.contains("active") && inbox.showAllProjects.length > 0 ||
    document.querySelector("#week-tasks").classList.contains("active") && inbox.showAllProjects.length > 0) {
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
projectsDisplay.addEventListener("click", (event) => {
    if (event.target.classList.contains("project") || event.target.classList.contains("project-name-container") || 
    event.target.classList.contains("edit-icon")) {
        let projectSelection;
        if (event.target.classList.contains("project")) {
            projectSelection = event.target;
        } else if (event.target.classList.contains("project-name-container")) {
            projectSelection = event.target.parentElement;
        } else if (event.target.classList.contains("edit-icon")) {
            projectSelection = event.target.parentElement.parentElement;
        }


        if (document.querySelector("#today-tasks").classList.contains("active") ||
        document.querySelector("#week-tasks").classList.contains("active")) {
            if (document.querySelector("#new-task-add").classList.contains("collapse")) {
                document.querySelector("#new-task-add").classList.toggle("collapse");
            }
        }

        if (document.querySelector(".active") && !projectSelection.classList.contains("active")) {
            document.querySelector(".active").classList.toggle("active");
        }

    
        for (let project of inbox.showAllProjects) {
            if (projectSelection.dataset.id === project.id && !projectSelection.classList.contains("active")) {
                projectSelection.classList.toggle("active");
                deleteCurrentTasks();
                changeTaskDisplayTitle(project.name + " tasks")

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
                deleteCurrentTasks();
                const newTaskProjectOptions = document.querySelectorAll("#new-task-project > option");
                newTaskProjectOptions.forEach(option => {
                    if (option.value === project.id) {
                        option.remove();
                    }
                })
                const editTaskProjectOptions = document.querySelectorAll("#edit-task-project > option");
                editTaskProjectOptions.forEach(option => {
                    if (option.value === project.id) {
                        option.remove();
                    }
                })
                if (!document.querySelector(".active")) {
                    inboxButton.classList.toggle("active");
                }
                inbox.showTasks.forEach(task => {
                    tasksDisplay.append(createTaskDiv(task));
                })

                if (!document.querySelector("#new-task-form").classList.contains("collapse") && inbox.showAllProjects.length === 0) {
                    document.querySelector("#new-task-form").classList.toggle("collapse")
                    document.querySelector("#inbox").classList.toggle("active")
                }

                if (!inbox.showAllProjects.length) {
                    deleteCurrentTasks();
                    changeTaskDisplayTitle("Inbox");
                    if (inbox.showAllProjects.length === 0 && !document.querySelector("#new-task-add").classList.contains("collapse")) {
                        document.querySelector("#new-task-add").classList.toggle("collapse");
                    }
                    if (document.querySelector("#today-tasks").classList.contains("active") && inbox.showAllProjects.length > 0 ||
                    document.querySelector("#week-tasks").classList.contains("active") && inbox.showAllProjects.length > 0) {
                        document.querySelector("#new-task-add").classList.toggle("collapse");     
                    }
                    if (!inboxButton.classList.contains("active")) {
                        document.querySelector(".active").classList.toggle("active");
                        inboxButton.classList.toggle("active");
                    }
                    inbox.showTasks.forEach(task => {
                        tasksDisplay.append(createTaskDiv(task));
                    })  
                }

                
                storeObjects()
            }
        }
    }
})

// EDIT PROJECT
projectsDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon") && !document.querySelector(".editing-project")) {
        if (!document.querySelector("#new-project-form").classList.contains("collapse")) {
            document.querySelector("#new-project-form").classList.toggle("collapse");
            document.querySelector("#new-project").classList.toggle("collapse");
        }
        const targetedProject = event.target.parentElement.parentElement;;
        for (let project of inbox.showAllProjects) {
            if (project.id === targetedProject.getAttribute("data-id")) {
                const editProjectForm = document.querySelector("#edit-project-form");
                document.querySelector("#edit-project-name").value = project.name
                editProjectForm.classList.toggle("collapse")
                targetedProject.classList.toggle("collapse")
                targetedProject.classList.toggle("editing-project")
                if (!document.querySelector("#new-task-add").classList.contains("collapse")) {
                    document.querySelector("#new-task-add").classList.toggle("collapse")
                }
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
    for (let project of inbox.showAllProjects) {
        if (project.id === editingProject.dataset.id) {
            project.name = document.querySelector("#edit-project-name").value;
            changeTaskDisplayTitle(project.name + " tasks")
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
            document.querySelector("#new-task-add").classList.toggle("collapse")
            storeObjects()
        }
    }
})

const cancelEditProject = document.querySelector("#edit-project-cancel");
cancelEditProject.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#edit-project-form").classList.toggle("collapse");
    document.querySelector(".editing-project").classList.toggle("collapse");
    document.querySelector(".editing-project").classList.toggle("editing-project");
})

// NEW PROJECT BUTTON
const newProjectButton = document.querySelector("#new-project");
newProjectButton.addEventListener("click", () => {
    if (!document.querySelector("#edit-project-form").classList.contains("collapse")) {
        document.querySelector("#edit-project-form").classList.toggle("collapse");
        document.querySelector(".editing-project").classList.toggle("collapse");
        document.querySelector(".editing-project").classList.toggle("editing-project");
    }
    newProjectButton.classList.toggle("collapse");
    newProjectButton.nextElementSibling.classList.toggle("collapse");
    if (!document.querySelector("#new-task-add").classList.contains("collapse")) {
        document.querySelector("#new-task-add").classList.toggle("collapse")
    }
})

// SUBMIT NEW PROJECT BUTTON
const submitNewProjectButton = document.querySelector("#new-project-form");
submitNewProjectButton.addEventListener("submit", (event) => {
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
    newProjectOption.setAttribute("value", newProject.id);
    newProjectOption.textContent = newProject.name;
    document.querySelector("#edit-task-project").appendChild(newProjectOption);
    console.log(inbox.showAllProjects)
    if (!document.querySelector("#today-tasks").classList.contains("active") || !document.querySelector("#week-tasks").classList.contains("active")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }
    storeObjects()
})

const cancelNewProject = document.querySelector("#new-project-cancel");
cancelNewProject.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#new-project-form").classList.toggle("collapse");
    document.querySelector("#new-project-form").reset();
    document.querySelector("#new-project").classList.toggle("collapse");
})

// TASK
const tasksDisplay = document.querySelector("#tasks-display");
tasksDisplay.addEventListener("click", event => {
    console.log(event.target)
    if (event.target.className === "task-main") {
        event.target.nextElementSibling.nextElementSibling.classList.toggle("collapse");
    }
    if (event.target.className === "task-main-left" || event.target.className === "task-main-right") {
        event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle("collapse");
    }

    if (event.target.className === "task-info") {
        event.target.parentElement.nextElementSibling.classList.toggle("collapse")
    }
})

// NEW TASK BUTTON
const newTaskButton = document.querySelector("#new-task-add");
newTaskButton.addEventListener("click", () => {
    addNewTask();
})

// SUBMIT NEW TASK BUTTON
const submitNewTaskButton = document.querySelector("#new-task-form");
submitNewTaskButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = createNewTask();
    const selectedProject = getTaskProject(inbox, newTask);
    selectedProject.addTask(newTask);
    if (document.querySelector(".active").dataset.id === selectedProject.id || 
    document.querySelector("#inbox").classList.contains("active")) {
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
    storeObjects()
    resetNewTaskForm();
})

const cancelNewTaskButton = document.querySelector("#new-task-cancel");
cancelNewTaskButton.addEventListener("click", () => {
    resetNewTaskForm();
})

// TASK DONE
tasksDisplay.addEventListener("click", event => {
    if (event.target.className === "task-done") {
        const targetedTask = event.target.parentElement;
        for (let task of inbox.showTasks) {
            if (task.id === targetedTask.getAttribute("id")) {
                inbox.deleteTask(task);
                targetedTask.remove();
                console.log("Task done")
            }
        }
        storeObjects()
    }
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
        storeObjects()
    }
})

// EDIT TASK
tasksDisplay.addEventListener("click", event => {
    if (event.target.classList.contains("edit-icon")) {
        const targetedTaskDiv = event.target.parentElement.parentElement;
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

    if (document.querySelector("#inbox").classList.contains("active")) {
        deleteCurrentTasks();
        inbox.updateTasks;
        inbox.showTasks.forEach(task => {
            tasksDisplay.appendChild(createTaskDiv(task));
        })
    } else if (document.querySelector(".project.active").dataset.id === editingTask.project) {
        deleteCurrentTasks();
        newProject.updateProject;
        newProject.showProject.forEach(task => {
            tasksDisplay.appendChild(createTaskDiv(task));
        })
    } else if (document.querySelector(".project.active").dataset.id !== editingTask.project) {
        deleteCurrentTasks();
        originalProject.updateProject;
        originalProject.showProject.forEach(task => {
            tasksDisplay.appendChild(createTaskDiv(task));
        })
    }
    storeObjects()
    document.querySelector("#edit-task-dialog").close();
})

const cancelEditTaskButton = document.querySelector("#edit-task-cancel");
cancelEditTaskButton.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(".editing-task").classList.toggle("editing-task");
    document.querySelector("#edit-task-dialog").close();
})

// TODAY TASKS
const todayTasks = document.querySelector("#today-tasks");
todayTasks.addEventListener("click", () => {
    if (!document.querySelector("#new-task-add").classList.contains("collapse")) {
        document.querySelector("#new-task-add").classList.toggle("collapse");
    }

    if (!document.querySelector("#new-task-form").classList.contains("collapse")) {
        document.querySelector("#new-task-form").classList.toggle("collapse");
    }
    
    if (!todayTasks.classList.contains("active")) {
        document.querySelector(".active").classList.toggle("active");
        todayTasks.classList.toggle("active");
    }
    deleteCurrentTasks();
    changeTaskDisplayTitle("Today tasks");
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

    if (!document.querySelector("#new-task-form").classList.contains("collapse")) {
        document.querySelector("#new-task-form").classList.toggle("collapse");
    }
    if (!thisWeekTasks.classList.contains("active")) {
        document.querySelector(".active").classList.toggle("active");
        thisWeekTasks.classList.toggle("active");
    }
    deleteCurrentTasks();
    changeTaskDisplayTitle("This week tasks");
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


// STORAGE

function storeObjects() {
    localStorage.setItem("inbox", JSON.stringify(inbox));
}

function getStorage() {
    console.log(JSON.parse(localStorage.getItem("inbox")))
    return JSON.parse(localStorage.getItem("inbox"))
}