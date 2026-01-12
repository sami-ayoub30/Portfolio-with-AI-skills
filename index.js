// Theme Toggle Functionality
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  const themeIcon = document.getElementById("themeIcon");

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update icon
  themeIcon.textContent = newTheme === "light" ? "🌙" : "☀️";

  // Add animation
  themeIcon.style.transform = "rotate(360deg)";
  setTimeout(() => {
    themeIcon.style.transform = "rotate(0deg)";
  }, 300);
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeIcon = document.getElementById("themeIcon");
  themeIcon.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Open Project (interactive button functionality)
function openProject(projectName) {
  // Redirect to the specific project page
  window.location.href = `${projectName}.html`;
}

// Contact Button Handler
function handleContact() {
  // You can customize this to open email client or contact form
  window.location.href = "mailto:ayoub@example.com?subject=Portfolio Contact";
}

// Create Animated Particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random size
    const size = Math.random() * 100 + 20;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Random position
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    // Random animation delay
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 15 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 20px var(--card-shadow)";
  } else {
    nav.style.boxShadow = "0 2px 10px var(--card-shadow)";
  }
});

// Initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  createParticles();
});
