// Shared JavaScript for project pages

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Initialize theme on page load
window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
});

