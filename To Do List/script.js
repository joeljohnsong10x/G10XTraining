const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const colorSelector = document.getElementById("color-selector");
const todoApp = document.querySelector(".todo-app");

function addTask() {
    if (inputBox.value === '') {
        alert("You must enter content to add!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function clearAllTasks() {
    listContainer.innerHTML = '';
    saveData();
}

function changeBackgroundColor() {
    const selectedColor = colorSelector.value;
    todoApp.style.background = selectedColor;
    localStorage.setItem("backgroundColor", selectedColor);
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        todoApp.style.background = savedColor;
        colorSelector.value = savedColor;
    }
}

showList();
