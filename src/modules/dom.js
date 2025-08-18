export const projectUpdater = (() => {

    const addProject = (title, projectID) => {

        // updates project's side bar

        const parentProjectBarDiv = document.getElementById('project-bar');
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

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.classList.add('edit-project-btn');
        editBtn.textContent = "Edit Project";
        buttonDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('delete-project-btn');
        deleteBtn.textContent = "Delete Project";
        buttonDiv.appendChild(deleteBtn);

        projectDiv.appendChild(buttonDiv);

        // updates project's main content body

        const contentDiv = document.getElementById('content');
        const parentProjectDiv = document.createElement('div');
        parentProjectDiv.classList.add('project-task-div');
        parentProjectDiv.setAttribute('data-project-id', projectID);

        const projectHeading = document.createElement('h2');
        projectHeading.textContent = title;
        parentProjectDiv.appendChild(projectHeading);

        const createTaskButton = document.createElement('button');
        createTaskButton.textContent = "Add Task";
        createTaskButton.classList.add('create-task-btn');
        parentProjectDiv.appendChild(createTaskButton);

        contentDiv.appendChild(parentProjectDiv);
    }

    const editProject = (newTitle, projectID) => {
        const project = document.querySelectorAll(`[data-project-id="${projectID}"]`);
        project.forEach(element => {
            element.textContent = newTitle;
        })
    }

    return {
        addProject,
        editProject
    }

}) ();

export const taskUpdater = (() => {

    const addTask = (title, description, dueDate, priority, projectID, taskID) => {

        const contentDiv = document.querySelector('#content');
        const projectDiv = contentDiv.querySelector(`[data-project-id="${projectID}"]`);
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute('data-task-id', taskID);
        projectDiv.appendChild(taskDiv);

        const taskHeading = document.createElement('h3');
        taskHeading.textContent = title;
        taskDiv.appendChild(taskHeading);

        const taskDescription = document.createElement('p');
        if (description) {
            taskDescription.textContent = description;
        }
        taskDiv.appendChild(taskDescription);

        const taskDueDate = document.createElement('p');
        taskDueDate.textContent = dueDate;
        taskDiv.appendChild(taskDueDate);

        const taskPriority = document.createElement('p');
        taskPriority.textContent = priority;
        taskDiv.appendChild(taskPriority);

        // Edit & delete buttons

        const buttonDiv = document.createElement('div');

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.classList.add('edit-task-btn');
        editBtn.textContent = "Edit Task";
        buttonDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('delete-task-btn');
        deleteBtn.textContent = "Delete Task";
        buttonDiv.appendChild(deleteBtn);

        taskDiv.appendChild(buttonDiv);

    }

    return {
        addTask
    }

}) ();