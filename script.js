// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Load tasks when the page loads
    loadTasks(); 

    // Select buttons and inputs
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList = document.getElementById('task-list');

    // Attach event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value)); // Call addTask on button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask(taskInput.value); // Call addTask on Enter key
    });
});

// Load tasks from Local Storage
function loadTasks() {
    // Retrieve tasks from Local Storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Loop through stored tasks and add them to the list
    storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving again
}

// Function to add a new task
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list'); // Select the task list

    const listItem = document.createElement('li'); // Create a new list item
    listItem.textContent = taskText; // Set the text content of the list item

    const removeBtn = document.createElement('button'); // Create a button to remove the task
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Functionality to remove the task
    removeBtn.onclick = () => {
        taskList.removeChild(listItem); // Remove the list item

        // Update Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove task from the array
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
    };

    listItem.appendChild(removeBtn); // Append the remove button to the list item
    taskList.appendChild(listItem); // Append the new list item to the task list

    // Save the task to Local Storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
    }

    taskInput.value = ""; // Clear the input field
}
