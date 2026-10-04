const clock = document.getElementById("datetime");

function updateTime() {
    if (clock) {
        clock.textContent = new Date().toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "medium",
            hour12: true
        });
    }
}

updateTime();
setInterval(updateTime, 1000);

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login form submitted successfully!");
    });
}