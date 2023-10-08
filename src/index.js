import "./style.css"
import createTask from "./create-task";
import { Project, projectListContainer } from "./create-project"
import { showTasks, showProjects } from "./ui";

const task = new createTask("gym", "Go in the morning", "23-12-2023", "high");
const task2 = new createTask("study", "Maths and spanish", "13-10-2023", "low");
const task3 = new createTask("play games", "with my friends", "23-12-2023", "medium");
const defaultProject = new Project("Project 1");
const project2 = new Project("Project 2")

const listOfProjects = projectListContainer();
listOfProjects.addProject(defaultProject);
listOfProjects.addProject(project2)
console.log(listOfProjects.showAllProjects()[0].name)
showProjects(listOfProjects)

defaultProject.addTask(task);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
console.log(defaultProject.showProject);

const taskList = document.querySelector("#tasks-display");

taskList.appendChild(showTasks(defaultProject))

const allTasks = document.querySelectorAll(".task-general-info");

allTasks.forEach(task => {
    task.addEventListener("click", () => {
        const taskAdditionalInfo = task.nextElementSibling
        taskAdditionalInfo.classList.toggle("collapse");
        taskAdditionalInfo.classList.toggle("expand");
    })
})