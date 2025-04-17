document.addEventListener('DOMContentLoaded', () => {
    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Переключение языка
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang');
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        document.documentElement.setAttribute('lang', newLang);

        // Показываем/скрываем тексты
        document.querySelectorAll('[data-lang]').forEach(el => {
            if (el.getAttribute('data-lang') === newLang) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });

        langToggle.textContent = newLang === 'ru' ? 'RU/EN' : 'EN/RU';
    });

    // Анимации при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('animate__fadeIn');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запуск при загрузке
});
