// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select Add Task button
    const taskInput = document.getElementById('task-input'); // Select Task input field
    const taskList = document.getElementById('task-list'); // Select Task list

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value

        if (taskText === "") {
            alert("Please enter a task."); // Alert for empty input
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content of the list item

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Add functionality to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item
        };

        // Append remove button to list item
        listItem.appendChild(removeBtn);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        taskInput.value = ""; // Clear the input field
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask(); // Call addTask on Enter key
    });

});