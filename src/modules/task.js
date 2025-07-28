export default class Task {
    constructor (title, description, dueDate, priority, isCompleted, projectCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.projectCategory = projectCategory;
        this.taskID = crypto.randomUUID();
    }
}