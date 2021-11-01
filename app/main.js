const selectElement = (element) => document.querySelector(element);

selectElement('.show-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
})
