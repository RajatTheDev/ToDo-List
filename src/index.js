import {projectsList, projectMethods, taskMethods} from "./modules/project.js";

// default project

projectMethods.createProject('Default');
projectMethods.createProject('Day Start');
projectMethods.createProject('Random');
projectMethods.createProject('Personal');

taskMethods.addTask('Washing', 'Cloth Washing process for my meeting', '20 july 2025', 'high', true,'Default');
taskMethods.addTask('Drying', 'Cloth drying process for my meeting', '21 july 2025', 'high', true,'Default');
taskMethods.addTask('Attend Meeting', 'Join the meeting at 9:00 AM', '22 july 2025', 'high', false,'Default');
taskMethods.addTask('Hair Styling', 'Get your hairs ready for the Party!', '23 November 2025', 'pretty high', false, 'Personal')

console.table(projectsList);

projectMethods.deleteProject('Day Start');
taskMethods.deleteTask('Drying');
projectMethods.editProject('Default', 'Important');
taskMethods.editTask('Edit Task', '', '19 august 2029', 'very high', false, 'Important', 'Washing');
console.table(projectsList);