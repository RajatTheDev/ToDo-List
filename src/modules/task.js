export class Task {
    constructor (title, description, dueDate, priority, taskID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskID = taskID ?? crypto.randomUUID();
    }
}