import createProject from "./modules/project.js"

let defaultProject = new createProject('Default'); 
    
defaultProject.createTask('Drying', 'Cloth drying process for my meeting', '21 july 2025', 'very high');

console.log(defaultProject.tasksList);