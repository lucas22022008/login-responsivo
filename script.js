const container = document.querySelector(".content");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
    container.classList.toggle('dark');
})