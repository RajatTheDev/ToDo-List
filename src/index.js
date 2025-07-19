import createTask from "./modules/task.js"
import createProject from "./modules/project.js"

let defaultTasks = new createProject('Default'); 

let laundry = new createTask('Laundry', 'Wash the Laundry items asap!!', '20th July 2025, 18:00', 'high', 'default');

defaultTasks.addTask(laundry);
console.log(laundry.description);