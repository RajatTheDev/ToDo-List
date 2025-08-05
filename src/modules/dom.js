export const projectUpdater = (() => {

    const uploadProject = (title, projectID) => {

        const parentProjectBarDiv = document.getElementById('project-bar');

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        projectDiv.setAttribute('project-id', projectID);

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = title;
        projectTitle.classList.add('project-title');

        projectDiv.appendChild(projectTitle);
        parentProjectBarDiv.appendChild(projectDiv);

        const parentProjectDiv = document.createElement('div');
        parentProjectDiv.classList.add('project-task-div');

    }

    return {
        uploadProject
    }

}) ();