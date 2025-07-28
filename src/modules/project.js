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
        this.tasksList.forEach(task => {
            if(task.title === taskTitle) {
                this.tasksList.splice(task.id, 1);
            }
        });
    };
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

    const editProject = (projectTitle) => {
        
    }

    return {
        createProject,
        deleteProject
    }
}) ();

const taskMethods = (() => {

    const createTask = (title, description, dueDate, priority, isCompleted, projectCategory) => {
        projectsList.forEach(project => {
            if (project.title === projectCategory) {
                project.createTask(title, description, dueDate, priority, isCompleted, projectCategory);
            }
        })
    }

    const deleteTask = (taskTitle) => {
        let count = 0;
        projectsList.forEach(project => {
            project.tasksList.forEach(task => {
                if (task.title === taskTitle) {
                    project.tasksList.splice(count, 1);
                }
                count++;
            })
        })
    }

    return {
        createTask,
        deleteTask
    }
}) ();