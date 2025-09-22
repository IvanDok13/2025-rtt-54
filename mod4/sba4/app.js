const taskNameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('category');
const deadlineInput = document.getElementById('deadline');
const statusInput = document.getElementById('status');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskListSection = document.getElementById('taskListSection');
const emptyInfo = document.getElementById('emptyInfo');

const taskListUl = document.createElement('ul');
taskListUl.id = 'task-list';
taskListSection.appendChild(taskListUl);

// Arrays of Tasks
const tasks = [];

// Event Listeners
addTaskBtn.addEventListener('click', addTask);

// Handler functions
function addTask() {
  const taskName = taskNameInput.value;
  const category = categoryInput.value;
  const deadline = deadlineInput.value;
  const status = statusInput.value;

  if (!taskName || !category || !deadline || !status) {
    toast('Please add all task details...');
    return;
  }
  console.log('Task Values');
  console.log(taskName, category, deadline, status);

  const newTask = {
    taskName,
    category,
    deadline,
    status,
  };

  tasks.push(newTask);
  console.log(tasks);
  emptyInfo.style.display = 'none';
  displayTasks();
}
