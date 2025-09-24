import { els, taskListUl } from './js/dom.js';
import { addTask, removeTask } from './js/handler.js';
import { renderTasks } from './js/render.js';

renderTasks();

els.addTaskBtn.addEventListener('click', addTask);
taskListUl.addEventListener('click', removeTask);
