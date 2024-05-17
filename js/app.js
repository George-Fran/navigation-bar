
let menu = document.querySelector('.menu');
let cerrar = document.querySelector('.cerrar');

menu.addEventListener('click', () => {
    if (cerrar.classList.contains('cerrar') || cerrar.classList.contains('dp-none')) {
        cerrar.classList.remove('dp-none');
        setTimeout(() => {
            cerrar.classList.remove('cerrar');
        }, 10);
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        cerrar.classList.add('cerrar');
        menu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    }
});

cerrar.addEventListener('transitionend', () => {
    if (cerrar.classList.contains('cerrar')) {
        cerrar.classList.add('dp-none');
    }
});

let botones = document.querySelectorAll('nav > ul > li > a');
botones.forEach(activo => {
    activo.addEventListener('click', () => {
        botones.forEach(cerrar => {
            cerrar.classList.remove('activo');
        });
        activo.classList.add('activo');
    });
});