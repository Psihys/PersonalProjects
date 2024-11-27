const button = document.getElementById('button');
const tasksList = document.getElementById('taskList');



const addToList = () => {
    
    const text = document.getElementById('taskInput').value;
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString();
    const dateString = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    const timeInfo = `(${timeString} on ${dateString})`
    if (text.trim() === '') {
        alert('Please enter a task!'); // Prevent empty tasks
        return;
    }
    const item = document.createElement('li');
    item.innerText = `${text}  ${timeInfo}`;

    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn'); // Add the delete button class
    deleteButton.innerText = 'x';
    deleteButton.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });

    item.appendChild(deleteButton);

    tasksList.appendChild(item);
}   

button.addEventListener('click', (event) => {
    event.preventDefault();
    button.classList.add('jump'); // Add the animation class

    // Remove the class after animation ends to allow re-triggering
    setTimeout(() => {
        button.classList.remove('jump');
    }, 800);

    addToList();
    
    document.getElementById('taskInput').value = ''; // Clear input field
});

