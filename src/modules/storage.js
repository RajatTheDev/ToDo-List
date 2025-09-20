import { Task } from "./task.js";
import { Project, projectsList } from "./project.js";
import { renderAll } from "./dom.js";

export const localStorageHandler = (() => {
    const saveToLocalStorage = (projectsList) => {
        localStorage.setItem('projects', JSON.stringify(projectsList))
    }

    const loadFromLocalStorage = () => {
        const data = localStorage.getItem('projects')
        const projects = data ? JSON.parse(data) : []
        projectsList.length = 0;
        projects.forEach(rawProject => {
            const project = new Project(rawProject.title, rawProject.projectID);
            rawProject.tasksList.forEach(rawTask => {
                const task = new Task(rawTask.title, rawTask.description, rawTask.dueDate, rawTask.priority, rawTask.taskID);
                project.tasksList.push(task);
            })
            projectsList.push(project)
        });
        renderAll(projectsList);
    }

    return {
        saveToLocalStorage,
        loadFromLocalStorage
    }
}) ()