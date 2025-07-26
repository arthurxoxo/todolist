function addTodo() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = taskText;
  listItem.onclick = () => listItem.classList.toggle("completed");

  document.getElementById("todo-list").appendChild(listItem);
  input.value = "";
}