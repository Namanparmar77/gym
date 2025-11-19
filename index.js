const allCards = document.querySelectorAll('.plan-card');

allCards.forEach(card => {
    card.addEventListener('click', function() {
        allCards.forEach(c => {
            c.classList.remove('active');
        });
        this.classList.add('active');
    });
});