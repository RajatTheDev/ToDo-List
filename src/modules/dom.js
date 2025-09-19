import editIcon from "../images/edit.svg";
import deleteIcon from "../images/delete.svg";

export const renderAll = (projectsList) => {
    const projectSidebar = document.querySelector('#project-bar');
    const content = document.querySelector('#content');
    projectSidebar.innerHTML = '';
    content.innerHTML = '';
    projectsList.forEach(project => {
        renderProject(project.title, project.projectID);
        project.tasksList.forEach(task => {
            renderTask(task.title, task.description, task.dueDate, task.priority, project.projectID, task.taskID);
        })
    });
}

const renderProject = (title, projectID) => {
    // updates project's side bar
    const parentProjectBarDiv = document.querySelector('#project-bar');
    
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    projectDiv.setAttribute('data-project-id', projectID);
        
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    projectTitle.classList.add('project-title');
        
    projectDiv.appendChild(projectTitle);
    parentProjectBarDiv.appendChild(projectDiv);

    // Edit and Delete buttons

    const buttonDiv = document.createElement('div');

    const editBtn = document.createElement('img');
    editBtn.src = editIcon;
    editBtn.title = "Rename Project";
    editBtn.classList.add('edit-project-btn', 'icon');
    buttonDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = deleteIcon;
    deleteBtn.title = "Delete Project";
    deleteBtn.classList.add('delete-project-btn', 'icon');
    buttonDiv.appendChild(deleteBtn);

    projectDiv.appendChild(buttonDiv);

    // updates project's main content body

    const contentDiv = document.querySelector('#content');
    const parentProjectDiv = document.createElement('div');
    parentProjectDiv.classList.add('project-task-div');
    parentProjectDiv.setAttribute('data-project-id', projectID);

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('project-task-header');

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = title;
    headingDiv.appendChild(projectHeading);

    const createTaskButton = document.createElement('button');
    createTaskButton.textContent = "Add Task";
    createTaskButton.classList.add('create-task-btn');
    headingDiv.appendChild(createTaskButton);
    parentProjectDiv.appendChild(headingDiv);
    contentDiv.appendChild(parentProjectDiv);
}

const renderTask = (title, description, dueDate, priority, projectID, taskID) => {
    const contentDiv = document.querySelector('#content');
    const projectDiv = contentDiv.querySelector(`[data-project-id="${projectID}"]`);
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    taskDiv.setAttribute('data-task-id', taskID);
    projectDiv.appendChild(taskDiv);

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');

    const taskHeading = document.createElement('h3');
    taskHeading.classList.add('task-title');
    taskHeading.textContent = title;
    taskHeader.appendChild(taskHeading);

    // Edit & delete buttons

    const buttonDiv = document.createElement('div');

    const editBtn = document.createElement('img');
    editBtn.src = editIcon;
    editBtn.title = "Edit Task";
    editBtn.classList.add('edit-task-btn', 'icon');
    buttonDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = deleteIcon;
    deleteBtn.title = "Delete Task";
    deleteBtn.classList.add('delete-task-btn', 'icon');
    buttonDiv.appendChild(deleteBtn);

    taskHeader.appendChild(buttonDiv);
    taskDiv.appendChild(taskHeader);

    // task info

    const taskDueDiv = document.createElement('div');
    const taskDueLabel = document.createElement('span');
    if (dueDate) {
        taskDueLabel.textContent = "Due: ";
    }
    taskDueDiv.appendChild(taskDueLabel);
    const taskDueDate = document.createElement('span');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = dueDate;
    taskDueDiv.appendChild(taskDueDate);
    taskDiv.appendChild(taskDueDiv);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    if (description) {
        taskDescription.textContent = description;
    }
    taskDiv.appendChild(taskDescription);

    taskDiv.dataset.priority = priority;
    if (priority === "low") {
        taskDiv.classList.add('low-priority');
    } else if (priority === "medium") {
        taskDiv.classList.add('medium-priority')
    } else if (priority === "high") {
        taskDiv.classList.add('high-priority')
    }
}