import taskCreator from "./task.js";
export {projectsList, projectMethods};  

let projectsList = [];

export default class Project {
    constructor (name) {
        this.name = name;
        this.projectID = crypto.randomUUID()
        this.tasksList = [];
    }

    createTask (title, description, dueDate, priority, projectCategory) {
        let task = new taskCreator(title, description, dueDate, priority, projectCategory);
        this.tasksList.push(task);
    }

    deleteTask (taskTitle) {
        this.tasksList.forEach(task => {
            if(task.title === taskTitle) {
                this.tasksList.splice(task.id, 1);
            }
        });
    };
}

const projectMethods = (() => {
    
    const pushProject = (projectName) => {
        projectsList.push(projectName);
    };

    const deleteProject = (projectName) => {
        projectsList.forEach(project => {
            if (project.name === projectName) {
                projectsList.splice(project.index, 1);
            }
        });
    };

    return {
        pushProject,
        deleteProject
    }
}) ();