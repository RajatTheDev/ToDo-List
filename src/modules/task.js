export default class Task {
    constructor (title, description, dueDate, priority, projectCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
        this.projectCategory = projectCategory;
        this.taskID = crypto.randomUUID();
    }
}