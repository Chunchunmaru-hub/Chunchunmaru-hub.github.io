window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.style.animation = "fadeOutPreloader 1.5s ease-out forwards";
    }, 1000);

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2500);
});