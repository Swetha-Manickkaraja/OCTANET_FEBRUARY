function addTodo() {
  var inputValue = document.getElementById("todoInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
      li.remove();
    };
    li.appendChild(deleteButton);
  }
}
