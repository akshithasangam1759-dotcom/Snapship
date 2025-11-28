const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("click", () => {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    body.classList.toggle("light");
});