const newTaskInput = document.querySelector('#new');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.querySelector('.tasks');

addTaskButton.addEventListener('click', (e) => {
  // Creates a new task element
  const taskElement = document.createElement('li');
  taskElement.classList.add('task');

  // Adds task text to the task element
  taskElement.textContent = newTaskInput.value;

  // Add the task element to the tasks list
  tasksList.appendChild(taskElement);

  // Clear the new task input
  newTaskInput.value = '';
});

// Add event listeners to the task elements
tasksList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('task')) {
    // Mark task as completed
    target.classList.toggle('completed');
  }
});