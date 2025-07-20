import Task from "./task.js"
export default class Project {
    constructor (name) {
        this.name = name;
        this.tasksList = [];
    }

    createTask(title, description, dueDate, priority) {
        const projectCategory = this.name;
        let task = new Task(title, description, dueDate, priority, projectCategory);
        this.tasksList.push(task);
    }
}
