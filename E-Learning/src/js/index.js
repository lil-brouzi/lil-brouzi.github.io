window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    bar = document.querySelector('.bar');

    bar.addEventListener('click', () => {
        bar.classList.toggle('bar_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            bar.classList.toggle('bar_active');
            menu.classList.toggle('menu_active');
        })
    })
})