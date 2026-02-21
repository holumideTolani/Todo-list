
const input = document.getElementById('To-do input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodo(){
    const task = input.value.trim();

    if(task === '') {
        alert('Please enter task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.onclick = () => {
        todoList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = '';

}

addBtn.addEventListener('click', addTodo);

input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        addTodo();
    }
})