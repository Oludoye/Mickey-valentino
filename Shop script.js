// Dynamically generate 20 look items
const gallery = document.querySelector('.gallery');
for (let i = 2; i <= 32; i++) {
  const item = document.createElement('div');
  item.className = 'item';
}
// Shopping Cart Logic
let cart = [];
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const item = e.target.closest('.item');
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price);
    cart.push({ name, price });
    updateCart();
  }
});
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    const item = this.closest(".item");
    const name = item.getAttribute("data-name");
    const price = item.getAttribute("data-price");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} has been added to your cart.`);
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = total.toFixed(2);
}


document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    const item = this.closest(".item");
    const name = item.getAttribute("data-name");
    const price = parseFloat(item.getAttribute("data-price"));
    const img = item.querySelector("img").getAttribute("src");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
   showNotification(`${name} added to cart`);
  }); 
});


function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.remove("hidden");

  setTimeout(() => {
    notification.classList.add("hidden");
  }, 1000); // 1 second
}