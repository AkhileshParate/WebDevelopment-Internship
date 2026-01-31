document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("errorMsg");

    if (name === "" || email === "" || message === "") {
        error.innerText = "⚠ Please fill all fields!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        error.innerText = "⚠ Enter a valid email!";
        return;
    }

    alert("Form Submitted Successfully 🍽️");
    error.innerText = "";
    this.reset();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText + 
        " <button onclick='removeTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
