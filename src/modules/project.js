import { Task } from "./task.js";
import { localStorageHandler } from "./storage.js";
import { renderAll } from "./dom.js";
export { projectsList, projectMethods, taskMethods };  

let projectsList = [];

export class Project {
    constructor (title, projectID) {
        this.title = title;
        this.projectID = projectID ?? crypto.randomUUID()
        this.tasksList = [];
    }

    createTask (title, description, dueDate, priority) {
        let task = new Task(title, description, dueDate, priority);
        this.tasksList.push(task);
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    }

    editTask (title, description, dueDate, priority, taskID) {
        this.tasksList.forEach(task => {
            if (task.taskID === taskID) {
                task.title = checkUndefined(title, task.title);
                task.description = checkUndefined(description, task.description);
                task.dueDate = checkUndefined(dueDate, task.dueDate);
                task.priority = checkUndefined(priority, task.priority);
            }
        })
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    }
    
    deleteTask (taskID) {
        let count = 0;
        this.tasksList.forEach(task => {
            if(task.taskID === taskID) {
                this.tasksList.splice(count, 1);
            }
            count++;
        });
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    };
}

const projectMethods = (() => {

    const createProject = (title) => {
        let newProject = new Project(title);
        projectsList.push(newProject);
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    }

    const deleteProject = (projectID) => {
        let count = 0;
        projectsList.forEach(project => {
            if (project.projectID === projectID) {
                projectsList.splice(count, 1);
            }
            count++;
        });
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    };

    const editProject = (newTitle, projectID) => {
        projectsList.forEach(project => {
            if (project.projectID === projectID) {
                project.title = newTitle;
            }
        });
        renderAll(projectsList);
        localStorageHandler.saveToLocalStorage(projectsList);
    }

    return {
        createProject,
        deleteProject,
        editProject
    }
}) ();

const taskMethods = (() => {

    const addTask = (title, description, dueDate, priority, projectID) => {
        projectsList.forEach(project => {
            if (project.projectID === projectID) {
                project.createTask(title, description, dueDate, priority);
            }
        })
    }

    const deleteTask = (taskID) => {
        projectsList.forEach(project => {
            project.deleteTask(taskID);
        })
    }

    const editTask = (title, description, dueDate, priority, taskID) => {
        projectsList.forEach(project => {
            project.editTask(title, description, dueDate, priority, taskID);
        })
    }

    return {
        addTask,
        deleteTask,
        editTask
    }
}) ();

const checkUndefined = (property, originalProperty) => {
    if (property === undefined || property === '' || property === null) {
        return originalProperty;
    } else {
        return property;
    }
};