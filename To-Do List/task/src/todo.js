let checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    checkbox.addEventListener("change", function () {
        let span = checkbox.nextElementSibling;
        span.classList.toggle("checked")
    });
}

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

for(let i = 0; i < taskList.length; i++) {
    addListItem(taskList[i])
}

function addListItem(taskText) {
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("change", function () {
        let span = checkBox.nextElementSibling;
        span.classList.toggle("checked")
    });

    let taskName = document.createElement("span");
    taskName.setAttribute("class", "task");
    taskName.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", function () {
        let index = taskList.indexOf(taskText);
        taskList.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(taskList));
        this.parentElement.remove();
    })

    let item = document.createElement("li");
    item.appendChild(checkBox);
    item.appendChild(taskName);
    item.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(item);
}

document.getElementById("add-task-button").addEventListener("click", function () {
    let taskText = document.getElementById("input-task").value;
    addListItem(taskText);
    taskList.push(taskText)
    localStorage.setItem("tasks", JSON.stringify(taskList));

    document.getElementById("input-task").value = "";

    checkboxes = document.querySelectorAll('input[type="checkbox"]');
});
