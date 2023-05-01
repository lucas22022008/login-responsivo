const container = document.querySelector(".content");
const icon = document.querySelector(".icon");

const password = document.getElementById("senha");
const iconPassword = document.getElementById("icon");

icon.addEventListener("click", () => {
    container.classList.toggle('dark');
})

function showHide() {
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        iconPassword.classList.add('hide');
    }
    else{
        password.setAttribute('type', 'password');
        iconPassword.classList.remove('hide');
    }
}