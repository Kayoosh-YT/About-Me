document.addEventListener('DOMContentLoaded', () => {
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

        langToggle.textContent = newLang === 'ru' ? 'EN' : 'RU';
    });
});
