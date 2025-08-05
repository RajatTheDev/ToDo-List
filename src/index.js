import {projectsList, projectMethods, taskMethods} from "./modules/project.js";

// default project

function template() {
    projectMethods.createProject('Default');
    projectMethods.createProject('Day Start');
    projectMethods.createProject('Random');
    projectMethods.createProject('Personal');
    
    taskMethods.addTask('Washing', 'Cloth Washing process for my meeting', '20 july 2025', 'medium', 'Default');
    taskMethods.addTask('Drying', 'Cloth drying process for my meeting', '21 july 2025', 'medium', 'Default');
    taskMethods.addTask('Attend Meeting', 'Join the meeting at 9:00 AM', '22 july 2025', 'high', 'Default');
    taskMethods.addTask('Hair Styling', 'Get your hairs ready for the Party!', '23 November 2025', 'low', 'Personal')
}

function templateMethods() {
    projectMethods.deleteProject('Day Start');
    taskMethods.deleteTask('Drying');
    projectMethods.editProject('Default', 'Important');
    taskMethods.editTask('Edit Task', '', '19 august 2029', 'high', 'Important', 'Washing');
    console.table(projectsList);
}

template();

// Project Creation Form

const projectCreationForm = (() => {

    const form = document.getElementById('new-project-form');
    const dialog = document.getElementById('new-project-dialog');
    const newProjectButton = document.getElementById('create-project');
    const cancelButton = document.getElementById('new-project-cancel');

    newProjectButton.addEventListener('click', () => {
        dialog.showModal();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('new-project-title').value.trim();
        projectMethods.createProject(title);
        console.table(projectsList);
        dialog.close();
        form.reset();
    });

}) ();

const taskCreationForm = (() => {

    const dialog = document.getElementById('new-task-dialog');
    const form = document.getElementById('new-task-form');
    const createTaskButton = document.getElementById('create-task');
    const cancelButton = document.getElementById('new-task-cancel');

    createTaskButton.addEventListener('click', () => {
        dialog.showModal();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
    })

}) ();

console.table(projectsList);