document.addEventListener('DOMContentLoaded', () => {
    let modo = document.querySelector("#btn");

    modo.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

