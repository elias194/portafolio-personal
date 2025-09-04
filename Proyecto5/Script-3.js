// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const mensaje = document.getElementById('mensaje');
// Función para agregar una nueva tarea
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === ""){
        mensaje.textContent = "INGRESE UN ITEM!!"
        mensaje.style.color = "red";
    }
    else{
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    newTaskInput.value = "";
    mensaje.textContent = "ITEM AGREGADO";
    mensaje.style.color = "green";
    }
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);