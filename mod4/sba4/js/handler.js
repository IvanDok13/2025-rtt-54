import { els } from './dom.js';
import { renderTasks } from './render.js';
import { tasks } from './state.js';
import { toast } from './toast.js';

export function addTask() {
  const taskName = els.taskNameInput.value;
  const category = els.categoryInput.value;
  const deadline = els.deadlineInput.value;
  const status = els.statusInput.value;

  if (!taskName || !category || !deadline || !status) {
    toast('Please add all task details...');
    return;
  }

  const newTask = { taskName, category, deadline, status };
  tasks.push(newTask);
  renderTasks();

  els.taskNameInput.value = '';
}
