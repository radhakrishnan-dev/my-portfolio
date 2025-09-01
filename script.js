const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load from localStorage if available
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Add pop animation on click
  toggleBtn.classList.add("clicked");
  setTimeout(() => toggleBtn.classList.remove("clicked"), 150);
});

const filterButtons = document.querySelectorAll('.filter-btn');
const designCards = document.querySelectorAll('.design-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active to clicked
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    designCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
