(() => {
    const startTime = new Date().getTime();
    document.addEventListener('DOMContentLoaded', () => {
        const el = document.getElementById("page_loaded");
        window.onload = () => {
            el.innerHTML += `Время загрузки страницы: ${(new Date().getTime() - startTime) / 1000} с`;
        };
    });
})();