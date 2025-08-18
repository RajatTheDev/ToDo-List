import { taskUpdater } from "./dom";

export default class Task {
    constructor (title, description, dueDate, priority, projectID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
        this.taskID = crypto.randomUUID();
        taskUpdater.addTask(title, description, dueDate, priority, projectID, this.taskID);
    }
}