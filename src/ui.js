function showTasks(project) {
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "tasks-container");

    project.showProject.forEach(task => {
        const oneTask = document.createElement("div");
        oneTask.classList.add("task");

        const generalInfo = document.createElement("div");
        generalInfo.classList.add("task-general-info");

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.textContent = task.name;
    
        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        taskDate.textContent = task.dueDate;

        generalInfo.append(taskName, taskDate);

        const additionalInfo = document.createElement("div");
        additionalInfo.classList.add("task-additional-info");
        additionalInfo.classList.add("collapse");
        additionalInfo.textContent = task.description;

        oneTask.append(generalInfo, additionalInfo);
        taskContainer.appendChild(oneTask);
    })
    
    return taskContainer;
}

function showProjects(listOfProjects) {
    const projectList = document.querySelector("#projects-list");

    listOfProjects.showAllProjects().forEach(project => {
        const oneProject = document.createElement("div");
        oneProject.classList.add("project");
        oneProject.textContent = project.name;

        projectList.appendChild(oneProject);
    })
}

export { showTasks, showProjects }