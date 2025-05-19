// Pequena animação de boas-vindas
window.onload = function() {
    const header = document.querySelector('header h1');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'opacity 1.2s';
        header.style.opacity = 1;
    }, 300);

    // Animação já controlada pelo CSS, mas pode adicionar destaque ao main
    setTimeout(() => {
        document.querySelector('main').style.opacity = 1;
    }, 1200);
};
