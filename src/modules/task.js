import { taskUpdater } from "./dom";

export default class Task {
    constructor (title, description, dueDate, priority, projectID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
        this.projectID = projectID;
        this.taskID = crypto.randomUUID();
        taskUpdater.taskUploader(title, description, dueDate, priority, projectID);
    }
}