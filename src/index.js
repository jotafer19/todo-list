import createTask from "./create-task";
import createProject from "./create-project"

const task = new createTask("gym", "Go in the morning", "23-12-2023", "high");
const project = new createProject("Project 1")

console.log(task)
console.log(project);
project.addTask(task);
console.log(project.showProject)
console.log("hey")
project.removeTask(task)
console.log(project.showProject)
