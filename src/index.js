import projectCreator, {projectsList, projectMethods} from "./modules/project.js";

// default project

const defaultProjects = () => { 
    let defaultProject = new projectCreator('Default');

    defaultProject.createTask('Washing', 'Cloth Washing process for my meeting', '20 july 2025', 'high', 'Default');
    defaultProject.createTask('Drying', 'Cloth drying process for my meeting', '21 july 2025', 'high', 'Default');
    defaultProject.createTask('Attend Meeting', 'Join the meeting at 9:00 AM', '22 july 2025', 'high', 'Default');
    console.table(defaultProject.tasksList);
    projectMethods.pushProject(defaultProject);
}

const newDefaultProjects = () => {
    let newDefaultProject = new projectCreator('Day Start');
    projectMethods.pushProject(newDefaultProject);
}

defaultProjects();
newDefaultProjects();

console.table(projectsList);