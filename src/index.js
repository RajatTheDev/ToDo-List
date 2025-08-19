import {projectsList, projectMethods, taskMethods} from "./modules/project.js";

// default project

projectMethods.createProject('Default');
projectMethods.createProject('Personal');

const defaultProject = projectsList.find(project => project.title === 'Default');
const personalProject = projectsList.find(project => project.title === 'Personal')

taskMethods.addTask('Washing', 'Cloth Washing process for my meeting', '2025-07-20', 'medium', defaultProject.projectID);
taskMethods.addTask('Drying', 'Cloth drying process for my meeting', '2025-07-21', 'medium', defaultProject.projectID);
taskMethods.addTask('Attend Meeting', 'Join the meeting at 9:00 AM', '2025-08-22', 'high', defaultProject.projectID);
taskMethods.addTask('Hair Styling', 'Get your hairs ready for the Party!', '2025-09-23', 'low', personalProject.projectID);

// Project Creation Form

const projectCreationForm = (() => {

    const form = document.getElementById('new-project-form');
    const dialog = document.getElementById('new-project-dialog');
    const newProjectButton = document.getElementById('create-project');
    const cancelButton = document.getElementById('new-project-cancel');
    const title = document.getElementById('new-project-title')

    newProjectButton.addEventListener('click', () => {
        dialog.showModal();
    });

    cancelButton.addEventListener('click', () => {
        resetAndClose(form, dialog);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        projectMethods.createProject(title.value);
        console.table(projectsList);
        resetAndClose(form, dialog);
    });

}) ();

// Project Edit Form

const projectEditForm = (() => {

    const dialog = document.getElementById('edit-project-dialog');
    const form = document.getElementById('edit-project-form');
    const newTitle = document.getElementById('edit-project-title');
    let projectID;

    document.body.addEventListener('click', (event) => {
        if(event.target.classList.contains("edit-project-btn")) {
            const parentProject = event.target.closest('[data-project-id]');
            projectID = parentProject.dataset.projectId;
            const currentTitle = parentProject.querySelector('.project-title').textContent;
            newTitle.value = currentTitle;
            dialog.showModal();
        }
    })

    const cancelBtn = document.getElementById('edit-project-cancel');
    cancelBtn.addEventListener('click', () => {
        resetAndClose(form, dialog);
    })
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        projectMethods.editProject(newTitle.value, projectID);
        resetAndClose(form, dialog);
    })

}) ();

// Task Creation Form

const taskCreationForm = (() => {

    const dialog = document.getElementById('new-task-dialog');
    const form = document.getElementById('new-task-form');
    const cancelButton = document.getElementById('new-task-cancel');
    const title = document.getElementById('new-task-title');
    const description = document.getElementById('new-task-description');
    const dueDate = document.getElementById('new-task-due-date');
    const priority = document.getElementById('new-task-priority');
    let projectID;

    document.body.addEventListener('click', (event) => {
        if(event.target.classList.contains("create-task-btn")) {
            const parentProject = event.target.closest('[data-project-id]');
            projectID = parentProject.dataset.projectId;
            dialog.showModal();
        }
    })

    cancelButton.addEventListener('click', () => {
        resetAndClose(form, dialog);
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        taskMethods.addTask(title.value, description.value, dueDate.value, priority.value, projectID);
        console.table(projectsList);
        resetAndClose(form, dialog);
    });

}) ();

// Task Edit Form

const editTask = (() => {

    const dialog = document.querySelector('#edit-task-dialog');
    const form = document.querySelector('#edit-task-form');
    const cancelButton = document.getElementById('edit-task-cancel');
    const title = document.getElementById('edit-task-title');
    const description = document.getElementById('edit-task-description');
    const dueDate = document.getElementById('edit-task-due-date');
    const priority = document.getElementById('edit-task-priority');
    let task, taskID

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-task-btn')) {
            task = event.target.closest('[data-task-id]');
            taskID = task.dataset.taskId;
            // Note: retaining previous value
            const currentTitle = task.querySelector('.task-title').textContent;
            const currentDescription = task.querySelector('.task-description').textContent;
            const currentDueDate = task.querySelector('.task-due-date').textContent;
            const currentPriority = task.querySelector('.task-priority').textContent;
            title.value = currentTitle;
            description.value = currentDescription;
            dueDate.value = currentDueDate;
            priority.value = currentPriority;
            dialog.showModal();
        }
    })

    cancelButton.addEventListener('click', () => {
        resetAndClose(form, dialog);
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        taskMethods.editTask(title.value, description.value, dueDate.value, priority.value, taskID);
        resetAndClose(form, dialog);
    })

}) ();

function resetAndClose(form, dialog) {
    dialog.close();
    form.reset();
}

console.table(projectsList);