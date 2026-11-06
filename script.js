document.getElementById('year').textContent = new Date().getFullYear();
const productIcons = ['car-front', 'bike', 'house', 'zap', 'truck', 'search'];
document.querySelectorAll('.product .symbol').forEach((icon, index) => {
    icon.innerHTML = `<i data-lucide="${productIcons[index]}" class="icon"></i>`;
});
if (window.lucide) window.lucide.createIcons();
const buttons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.product')];
buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    cards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
}));
