export const projectUpdater = (() => {

    const uploadProject = (title, projectID) => {

        // updates project's side bar

        const parentProjectBarDiv = document.getElementById('project-bar');
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        projectDiv.setAttribute('project-id', projectID);
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = title;
        projectTitle.classList.add('project-title');
        
        projectDiv.appendChild(projectTitle);
        parentProjectBarDiv.appendChild(projectDiv);

        // updates project's main content body

        const contentDiv = document.getElementById('content');
        const parentProjectDiv = document.createElement('div');
        parentProjectDiv.classList.add('project-task-div');
        parentProjectDiv.setAttribute('project-id', projectID);

        const projectHeading = document.createElement('h2');
        projectHeading.textContent = title;
        parentProjectDiv.appendChild(projectHeading);

        contentDiv.appendChild(parentProjectDiv);

        // updates task selection form

        const projectCategories = document.getElementById('new-task-project-categories');
        projectCategories.options.add(new Option(title, projectID));

    }

    return {
        uploadProject
    }

}) ();

export const taskUpdater = (() => {

    const taskUploader = (title, description, dueDate, priority, projectID) => {

        const contentDiv = document.querySelector('#content');
        const projectDiv = contentDiv.querySelector(`[project-id="${projectID}"]`);
        const taskDiv = document.createElement('div');
        projectDiv.appendChild(taskDiv);

        const taskHeading = document.createElement('h3');
        taskHeading.textContent = title;
        taskDiv.appendChild(taskHeading);

        const taskDescription = document.createElement('p');
        if (description != '' || description != undefined || description != null) {
            taskDescription.textContent = description;
        }
        taskDiv.appendChild(taskDescription);

        const taskDueDate = document.createElement('p');
        taskDueDate.textContent = dueDate;
        taskDiv.appendChild(taskDueDate);

        const taskPriority = document.createElement('p');
        taskPriority.textContent = priority;
        taskDiv.appendChild(taskPriority);

    }

    return {
        taskUploader
    }

}) ();