import { taskUpdater } from "./dom";

export default class Task {
    constructor (title, description, dueDate, priority, projectID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskID = crypto.randomUUID();
    }
}