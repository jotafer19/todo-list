import editIcon from "./images/edit_icon.svg";
import moveIcon from "./images/move_icon.svg";
import deleteIcon from "./images/delete_icon.svg";

function loadPage(inbox) {
    document.querySelector("#inbox").classList.toggle("active");
    inbox.showTasks.forEach(task => {
        document.querySelector("#tasks-display").appendChild(createTaskDiv(task));
    })
}

function createTaskDiv(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", task.id)

    const taskMainInfo = document.createElement("div");
    taskMainInfo.classList.add("task-main");

    const taskMainLeft = document.createElement("div");
    taskMainLeft.classList.add("task-main-left");
    taskMainLeft.textContent = task.name;

    const taskMainRight = document.createElement("div");
    taskMainRight.classList.add("task-main-right");
    taskMainRight.textContent = task.date;

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("task-icons");
    const myEditIcon = new Image();
    myEditIcon.src = editIcon;
    myEditIcon.classList.add("edit-icon");
    myEditIcon.classList.add("task-icon");
    const myMoveIcon = new Image();
    myMoveIcon.src = moveIcon;
    myMoveIcon.classList.add("move-icon");
    myMoveIcon.classList.add("task-icon");
    const myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    myDeleteIcon.classList.add("delete-icon");
    myDeleteIcon.classList.add("task-icon");

    iconsContainer.append(myEditIcon, myMoveIcon, myDeleteIcon);

    taskMainInfo.append(taskMainLeft, taskMainRight, iconsContainer);

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
    projectDiv.textContent = project.name;

    return projectDiv;
}

function editTask(task) {
    const editTaskForm = document.createElement("form");
    editTaskForm.classList.add("edit-task-form");

    const editTaskName = document.createElement("input");
    editTaskName.classList.add("edit-task-name");
    editTaskName.value = task.name;

    const editTaskDescription = document.createElement("textarea");
    editTaskDescription.classList.add("edit-task-description");
    editTaskDescription.textContent = task.description;

    const editTaskDate = document.createElement("input");
    editTaskDate.classList.add("edit-task-date");
    editTaskDate.setAttribute("type", "date");
    editTaskDate.value = task.date;

    const editTaskPriority = document.createElement("select");
    editTaskPriority.classList.add("edit-task-priority");
    const taskPriority = ["High", "Medium", "Low"];
    for (let item of taskPriority) {
        const priorityItem = document.createElement("option");
        if (item === task.priority) {
            priorityItem.setAttribute("selected", "selected");
        }
        priorityItem.textContent = item;
        priorityItem.setAttribute("value", item);
        editTaskPriority.appendChild(priorityItem);
    }

    const editTaskButtons = document.createElement("div");
    const editSubmitButton = document.createElement("button");
    editSubmitButton.setAttribute("type", "submit");
    editSubmitButton.setAttribute("id", "edit-task-submit");
    editSubmitButton.textContent = "Edit Task";
    const editCancelButton = document.createElement("button");
    editCancelButton.textContent = "Cancel";
    editTaskButtons.append(editSubmitButton, editCancelButton);

    editTaskForm.append(editTaskName, editTaskDescription, editTaskDate, editTaskPriority, editTaskButtons);

    return editTaskForm;
}

export { loadPage, createTaskDiv, createProjectDiv, editTask }