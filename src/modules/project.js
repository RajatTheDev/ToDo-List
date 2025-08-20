import taskCreator from "./task.js";
import { projectUpdater, taskUpdater } from "./dom.js";
export { projectsList, projectMethods, taskMethods };  

let projectsList = [];

export default class Project {
    constructor (title) {
        this.title = title;
        this.projectID = crypto.randomUUID()
        this.tasksList = [];
        projectUpdater.addProject(this.title, this.projectID);
    }

    createTask (title, description, dueDate, priority) {
        let task = new taskCreator(title, description, dueDate, priority, this.projectID);
        this.tasksList.push(task);
    }

    editTask (title, description, dueDate, priority, taskID) {
        this.tasksList.forEach(task => {
            if (task.taskID === taskID) {
                task.title = checkUndefined(title, task.title);
                task.description = checkUndefined(description, task.description);
                task.dueDate = checkUndefined(dueDate, task.dueDate);
                task.priority = checkUndefined(priority, task.priority);
                taskUpdater.editTask(title, description, dueDate, priority, taskID);
            }
        })
    }
    
    deleteTask (taskID) {
        let count = 0;
        this.tasksList.forEach(task => {
            if(task.taskID === taskID) {
                this.tasksList.splice(count, 1);
            }
            count++;
        });
    };
}

const projectMethods = (() => {

    const createProject = (title) => {
        let newProject = new Project(title);
            projectsList.push(newProject);
    }

    const deleteProject = (projectID) => {
        let count = 0;
        projectsList.forEach(project => {
            if (project.projectID === projectID) {
                projectsList.splice(count, 1);
            }
            count++;
        });
        projectUpdater.deleteProject(projectID);
    };

    const editProject = (newTitle, projectID) => {
        projectsList.forEach(project => {
            if (project.projectID === projectID) {
                project.title = newTitle;
            }
        });
        projectUpdater.editProject(newTitle, projectID);
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
        taskUpdater.deleteTask(taskID);
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