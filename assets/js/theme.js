(function() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.body.dataset.theme = initialTheme;

    updateThemeIcon(initialTheme);
})();

function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);

    updateThemeIcon(newTheme);
}

function updateThemeIcon(currentTheme) {
    const themeIcon = document.getElementById("theme-icon");

    themeIcon.classList.remove("fa-sun", "fa-moon");

    if (currentTheme === "dark") {
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.add("fa-moon"); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", toggleTheme);

    const iconContainers = document.querySelectorAll('.icon-container');
    iconContainers.forEach(container => {
        container.addEventListener('click', function() {
            iconContainers.forEach(c => c.classList.remove('selected'));
            container.classList.add('selected');
        });
    });
});
