export default class Task {
    constructor (title, description, dueDate, priority, projectCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectCategory = projectCategory;
        this.taskId = generateRandomId();
    }
}

function generateRandomId() {
    const id = Math.floor(Math.random() * 100000);
    return id;
} 