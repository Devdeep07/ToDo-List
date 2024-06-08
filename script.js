document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const task = todoInput.value.trim();
        if (task) {
            addTask(task);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const task = todoInput.value.trim();
            if (task) {
                addTask(task);
                todoInput.value = '';
            }
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const span = document.createElement('span');
        span.textContent = task;
        
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(button);
        todoList.appendChild(li);
    }
});
