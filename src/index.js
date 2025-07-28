import {projectsList, projectMethods, taskMethods} from "./modules/project.js";

// default project

projectMethods.createProject('Default');
projectMethods.createProject('Day Start');
projectMethods.createProject('Random');
projectMethods.createProject('Personal');

taskMethods.createTask('Washing', 'Cloth Washing process for my meeting', '20 july 2025', 'high', true,'Default');
taskMethods.createTask('Drying', 'Cloth drying process for my meeting', '21 july 2025', 'high', true,'Default');
taskMethods.createTask('Attend Meeting', 'Join the meeting at 9:00 AM', '22 july 2025', 'high', false,'Default');
taskMethods.createTask('Hair Styling', 'Get your hairs ready for the Party!', '23 November 2025', 'pretty high', false, 'Personal')

console.table(projectsList);

projectMethods.deleteProject('Day Start');
taskMethods.deleteTask('Drying');
projectMethods.editProject('Default', 'Important');
taskMethods.editTask('Edit Task', '', '', 'very high', false, 'Important', 'Washing');
console.table(projectsList);