const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Solicitar permiso para notificaciones
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Cargar tareas guardadas
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => addTask(task.text, task.completed));

// Añadir tarea
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    addTask(text);
    taskInput.value = "";
  }
});

// Crear tarea y añadirla a la lista
function addTask(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("completed");

  li.addEventListener("click", () => toggleTask(li));
  taskList.appendChild(li);
  saveTasks();
}

// Marcar / desmarcar tarea
function toggleTask(li) {
  li.classList.toggle("completed");
  saveTasks();

  if (li.classList.contains("completed")) {
    sendNotification(`Tarea completada: "${li.textContent}"`);
  }
}

// Guardar en localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Enviar notificación
function sendNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("Lista de tareas", {
      body: message,
      icon: "https://img.icons8.com/?size=100&id=118955&format=png&color=000000",
    });
  }
}
