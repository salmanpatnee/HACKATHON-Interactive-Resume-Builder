document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('show-entries');
    var entries = document.querySelectorAll('.experience-item.hidden');
    var isOpen = false;
    button.addEventListener('click', function () {
        isOpen = !isOpen;
        entries.forEach(function (entry) {
            entry.classList.toggle('hidden', !isOpen);
        });
        button.textContent = isOpen ? 'Show Less' : 'Show More Experience';
    });
});
