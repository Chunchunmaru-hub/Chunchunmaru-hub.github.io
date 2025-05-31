// Set theme as early as possible to avoid flicker
(function() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the initial theme based on saved value or user's preference
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.body.dataset.theme = initialTheme;

    // Set the correct icon for the initial theme
    updateThemeIcon(initialTheme);
})();

function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update the theme on the body
    document.body.dataset.theme = newTheme;

    // Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);

    // Update the icon based on the new theme
    updateThemeIcon(newTheme);
}

function updateThemeIcon(currentTheme) {
    const themeIcon = document.getElementById("theme-icon");

    // Clear existing FontAwesome icon classes
    themeIcon.classList.remove("fa-sun", "fa-moon");

    // Add the correct FontAwesome icon based on the theme
    if (currentTheme === "dark") {
        themeIcon.classList.add("fa-sun"); // Sun icon for light mode
    } else {
        themeIcon.classList.add("fa-moon"); // Moon icon for dark mode
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Set up event listener for the toggle button
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", toggleTheme);

    // Handle selected icon style on click
    const iconContainers = document.querySelectorAll('.icon-container');
    iconContainers.forEach(container => {
        container.addEventListener('click', function() {
            iconContainers.forEach(c => c.classList.remove('selected'));
            container.classList.add('selected');
        });
    });
});
