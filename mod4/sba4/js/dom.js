export const els = {
  taskNameInput: document.getElementById('task-name'),
  categoryInput: document.getElementById('category'),
  deadlineInput: document.getElementById('deadline'),
  statusInput: document.getElementById('status'),
  addTaskBtn: document.getElementById('addTaskBtn'),
  taskListSection: document.getElementById('taskListSection'),
  emptyInfo: document.getElementById('emptyInfo'),
  toast: document.getElementById('toast'),
};

let taskListUl = document.getElementById('task-list');
if (!taskListUl) {
  taskListUl = document.createElement('ul');
  taskListUl.id = 'task-list';
  taskListUl.className =
    'mt-[18px] grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[14px]';
  els.taskListSection.appendChild(taskListUl);
}
export { taskListUl };
