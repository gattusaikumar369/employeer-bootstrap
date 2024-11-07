function toggleMenu(event) {
    const dotsDiv = event.target.closest('.dots-data-cnt').querySelector('.dots-div');
    dotsDiv.classList.toggle('open');
}

function closeMenu() {
    document.querySelectorAll('.dots-div').forEach(menu => {
        menu.classList.remove('open');
    });
}

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dots-data-cnt')) {
        closeMenu();
    }
});