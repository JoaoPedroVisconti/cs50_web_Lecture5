

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#new-task').onsubmit = () => {

        // Create a new item for list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        // Add new item to task list
        document.querySelector('#tasks').append(li);

        // Clear input filed
        document.querySelector('#task').value = '';

        // Stop form from submitting
        return false;
    };
});