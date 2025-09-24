import { els, taskListUl } from './dom.js';
import { tasks } from './state.js';

function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.className =
    'border-[#2a2f3a] rounded-[16px] p-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col gap-3 relative transition-transform duration-150 ease-linear hover:-translate-y-0.5';
  li.dataset.index = String(index);

  li.innerHTML = `
    <h3 class="text-lg font-semibold mb-2">${task.taskName}</h3>
    <p class="mb-1"><strong>Category:</strong> ${task.category}</p>
    <p class="mb-1"><strong>Deadline:</strong> ${task.deadline}</p>
    <p><strong>Status:</strong> ${task.status}</p>
    <button class="mt-2 px-3 py-1 bg-red-500 text-white rounded delete-btn">Delete</button>
  `;
  return li;
}

export function renderTasks() {
  taskListUl.innerHTML = '';
  if (!tasks.length) {
    els.emptyInfo.style.display = '';
    return;
  }
  els.emptyInfo.style.display = 'none';
  tasks.forEach((t, i) => taskListUl.appendChild(createTaskItem(t, i)));
}
