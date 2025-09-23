import { els } from './js/dom.js';
import { addTask } from './js/handler.js';
import { renderTasks } from './js/render.js';

renderTasks();

els.addTaskBtn.addEventListener('click', addTask);
