// Мобильное меню
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');

    mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenuToggle.classList.remove('active');
            navLeft.classList.remove('active');
            navRight.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});