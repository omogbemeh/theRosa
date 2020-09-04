// select element function

const selectElement = element => {
    return document.querySelector(element)
};

const menuToggler = selectElement('.menu-toggler');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open')
})

