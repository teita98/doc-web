// Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Función para actualizar el estado del menú
function updateMenuState(isOpen) {
    if (isOpen) {
        side_menu.classList.add('menu__side_move');
        // Cambiar el ícono del botón
        btn_open.classList.remove('fa-arrow-right');
        btn_open.classList.add('fa-arrow-left');
    } else {
        side_menu.classList.remove('menu__side_move');
        // Cambiar el ícono del botón
        btn_open.classList.remove('fa-arrow-left');
        btn_open.classList.add('fa-arrow-right');
    }
}

// Leer el estado del menú desde localStorage
const menuIsOpen = localStorage.getItem('menuIsOpen') === 'true';
updateMenuState(menuIsOpen);

// Event listener para el botón de abrir/cerrar menú
btn_open.addEventListener('click', function () {
    const isOpen = !side_menu.classList.contains('menu__side_move');
    updateMenuState(isOpen);
    localStorage.setItem('menuIsOpen', isOpen);
});

// Event listener para cambiar el estado del menú en ventanas pequeñas
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    if (width <= 760) {
        updateMenuState(false); // Cerrar el menú al redimensionar la ventana
    } else {
        const menuIsOpen = localStorage.getItem('menuIsOpen') === 'true';
        updateMenuState(menuIsOpen);
    }
});

// Ejecutar el evento de resize al cargar la página para aplicar las reglas
window.dispatchEvent(new Event('resize'));
