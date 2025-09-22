const taskNameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('category');
const deadlineInput = document.getElementById('deadline');
const statusInput = document.getElementById('status');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskListSection = document.getElementById('taskListSection');
const emptyInfo = document.getElementById('emptyInfo');

const taskListUl = document.createElement('ul');
taskListUl.id = 'task-list';
taskListUl.className =
  'mt-[18px] grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[14px]';
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

function toast(message) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = message;
  toastEl.classList.add('opacity-100');
  setTimeout(() => {
    toastEl.classList.remove('opacity-100');
  }, 3000);
}

function displayTasks() {
  const task = document.createElement('li');
  task.className =
    'border-[#2a2f3a] rounded-[16px] p-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col gap-3 relative transition-transform duration-150 ease-linear hover:-translate-y-0.5';

  task.innerHTML = `
    <h3 class="text-lg font-semibold mb-2">${tasks[tasks.length - 1].taskName}</h3>
    <p class="mb-1"><strong>Category:</strong> ${tasks[tasks.length - 1].category}</p>
    <p class="mb-1"><strong>Deadline:</strong> ${tasks[tasks.length - 1].deadline}</p>
    <p><strong>Status:</strong> ${tasks[tasks.length - 1].status}</p>
    <button class="mt-2 px-3 py-1 bg-red-400 text-white rounded delete-btn">Delete</button>
  `;

  taskListUl.appendChild(task);
}
