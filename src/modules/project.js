import taskCreator from "./task.js";
import { projectUpdater } from "./dom.js";
export { projectsList, projectMethods, taskMethods };  

let projectsList = [];

export default class Project {
    constructor (title) {
        this.title = title;
        this.projectID = crypto.randomUUID()
        this.tasksList = [];
        projectUpdater.uploadProject(this.title, this.projectID);
    }

    createTask (title, description, dueDate, priority, projectID) {
        let task = new taskCreator(title, description, dueDate, priority, projectID);
        this.tasksList.push(task);
    }
    
    deleteTask (taskTitle) {
        let count = 0;
        this.tasksList.forEach(task => {
            if(task.title === taskTitle) {
                this.tasksList.splice(count, 1);
            }
            count++;
        });
    };

    editTask (title, description, dueDate, priority, projectID, oldTitle) {
        this.tasksList.forEach(task => {
            if (task.title === oldTitle) {
                task.title = checkUndefined(title, task.title);
                task.description = checkUndefined(description, task.description);
                task.dueDate = checkUndefined(dueDate, task.dueDate);
                task.priority = checkUndefined(priority, task.priority);
                task.projectID = checkUndefined(projectID, task.projectID);
            }
        })
    }
}

const projectMethods = (() => {

    const createProject = (title) => {
        let newProject = new Project(title);
            projectsList.push(newProject);
    }

    const deleteProject = (projectTitle) => {
        let count = 0;
        projectsList.forEach(project => {
            if (project.title === projectTitle) {
                projectsList.splice(count, 1);
            }
            count++;
        });
    };

    const editProject = (oldTitle, newTitle) => {
        projectsList.forEach(project => {
            if (project.title === oldTitle) {
                project.title = newTitle;
            }
        });
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
                project.createTask(title, description, dueDate, priority, projectID);
            }
        })
    }

    const deleteTask = (taskTitle) => {
        let count = 0;
        projectsList.forEach(project => {
            project.deleteTask(taskTitle);
        })
    }

    const editTask = (title, description, dueDate, priority, projectID, oldTitle) => {
        projectsList.forEach(project => {
            project.editTask(title, description, dueDate, priority, projectID, oldTitle);
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