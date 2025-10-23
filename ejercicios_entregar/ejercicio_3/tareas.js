const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Solicitar permiso para notificaciones
if (Notification.permission !== "granted") {
  // API del navegador(Web Notification API)
  // Ventana tipo alert para conceder permisos
  Notification.requestPermission();
}

// Cargar tareas guardadas en localStorage
//vendria bien un boton para lipiar las tareas terminadas
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => addTask(task.text, task.completed)); // Guardamos la tarea y su estado (true/false)

// Añadir tarea, comprobamos que no este vacio el taskInput
// .trim para quitar los espacios vacios
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    addTask(text);
    taskInput.value = "";
  }
});

// Crear tarea y añadirla a la lista, ademas de añadirle la class de css
function addTask(text, completed = false) {
  const li = document.createElement("li"); // creamos elemento <li></li>
  li.textContent = text; // Añadimos el texto del taskInput
  if (completed) li.classList.add("completed");

  li.addEventListener("click", () => toggleTask(li));
  taskList.appendChild(li);
  saveTasks();
}

// interactuamos con completed true/false para tachada o no
function toggleTask(li) {
  li.classList.toggle("completed");
  saveTasks();

  if (li.classList.contains("completed")) {
    sendNotification(`Tarea completada: "${li.textContent}"`); // Notificacion de tarea completada
  }
}

// La alamcenamos en localStorage para que cuando recarguemos la pagina sigan apareciendo las tareas
// mantener estados de completed
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      // añadimos al final
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Enviar notificación, revisa si han sido validados los permisos de notificacion
// notificaciones al completar tarea
function sendNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("Lista de tareas", {
      body: message,
      icon: "https://img.icons8.com/?size=100&id=118955&format=png&color=000000",
    });
  }
}
