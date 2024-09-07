document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-entries') as HTMLButtonElement;
    const entries = document.querySelectorAll('.experience-item.hidden');
    let isOpen = false;

    button.addEventListener('click', () => {
        isOpen = !isOpen;
        entries.forEach(entry => {
            entry.classList.toggle('hidden', !isOpen);
        });
        button.textContent = isOpen ? 'Show Less' : 'Show More Experience';
    });
});
