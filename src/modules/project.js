import taskCreator from "./task.js";
export {projectsList, projectMethods, taskMethods};  

let projectsList = [];

export default class Project {
    constructor (title) {
        this.title = title;
        this.projectID = crypto.randomUUID()
        this.tasksList = [];
    }

    createTask (title, description, dueDate, priority, isCompleted, projectCategory) {
        let task = new taskCreator(title, description, dueDate, priority, isCompleted, projectCategory);
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

    editTask (title, description, dueDate, priority, isCompleted, projectCategory, oldTitle) {
        this.tasksList.forEach(task => {
            if (task.title === oldTitle) {
                task.title = checkUndefined(title, task.title);
                task.description = checkUndefined(description, task.description);
                task.dueDate = checkUndefined(dueDate, task.dueDate);
                task.priority = checkUndefined(priority, task.priority);
                task.isCompleted = checkUndefined(isCompleted, task.isCompleted);
                task.projectCategory = checkUndefined(projectCategory, task.projectCategory);
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

    const addTask = (title, description, dueDate, priority, isCompleted, projectCategory) => {
        projectsList.forEach(project => {
            if (project.title === projectCategory) {
                project.createTask(title, description, dueDate, priority, isCompleted, projectCategory);
            }
        })
    }

    const deleteTask = (taskTitle) => {
        let count = 0;
        projectsList.forEach(project => {
            project.deleteTask(taskTitle);
        })
    }

    const editTask = (title, description, dueDate, priority, isCompleted, projectCategory, oldTitle) => {
        projectsList.forEach(project => {
            project.editTask(title, description, dueDate, priority, isCompleted, projectCategory, oldTitle);
        })
    }

    return {
        addTask,
        deleteTask,
        editTask
    }
}) ();

const checkUndefined = (property, originalProperty) => {
    if (property === undefined | property === '' | property === null) {
        return originalProperty;
    } else {
        return property;
    }
};