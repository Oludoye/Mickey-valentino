// Dummy reviews (you can fetch from server later)
const reviews = [
  {
    name: "Sandra O.",
    message: "The dress I got was FIRE 🔥. Fit perfectly and looked stunning!",
    rating: 5
  },
  {
    name: "Michael A.",
    message: "Delivery was quick, and quality was solid. Will order again.",
    rating: 4
  },
  {
    name: "Adaobi T.",
    message: "My streetwear set came exactly as shown. The packaging was so nice too!",
    rating: 5
  }
];

// Load reviews on page load
window.onload = () => {
  renderReviews();

  document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const rating = parseInt(document.getElementById("rating").value);

    if (name && message) {
      reviews.unshift({ name, message, rating });
      renderReviews();
      this.reset();
    }
  });
};

// Render reviews to the page
function renderReviews() {
  const container = document.getElementById("testimonialContainer");
  container.innerHTML = '';

  reviews.forEach(review => {
    const stars = '⭐'.repeat(review.rating);
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <h3>${review.name}</h3>
      <div class="stars">${stars}</div>
      <p>"${review.message}"</p>
    `;
    container.appendChild(card);
  });
}
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}