function toggleDescription(cardNumber) {
    const description = document.querySelectorAll('.card .description')[cardNumber - 1];
    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
}
