export default function createToDo() {
    const formToDo = document.createElement("form");
    formToDo.setAttribute("id", "task-form");

    const cardTitle = document.createElement("input");
    cardTitle.placeholder = "Title";
    cardTitle.setAttribute("id", "card-title");

    const cardDescription = document.createElement("textarea");
    cardDescription.placeholder = "Description";
    cardDescription.setAttribute("id", "card-description");

    const cardDueDate = document.createElement("input");
    cardDueDate.type = "date";
    cardDueDate.setAttribute("id", "card-date");

    const cardPriorityContainer = document.createElement("div");
    cardPriorityContainer.setAttribute("id", "card-priority-container");
    const lowPriority = document.createElement("div");
    lowPriority.textContent = "Low";
    lowPriority.classList.add("card-priority");
    lowPriority.setAttribute("id", "low-priority");
    const mediumPriority = document.createElement("div");
    mediumPriority.textContent = "Medium"
    mediumPriority.classList.add("card-priority");
    mediumPriority.setAttribute("id", "medium-priority");
    const highPriority = document.createElement("div");
    highPriority.textContent = "High";
    highPriority.classList.add("card-priority");
    highPriority.setAttribute("id", "high-priority");
    cardPriorityContainer.append(lowPriority, mediumPriority, highPriority);

    const submitButton = document.createElement("button");
    submitButton.textContent = "ADD TO DO";
    submitButton.setAttribute("id", "submit-to-do");

    formToDo.append(cardTitle, cardDescription, cardDueDate, cardPriorityContainer, submitButton);

    return formToDo;
}