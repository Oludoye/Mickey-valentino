document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  const resetBtn = document.getElementById("reset-btn");
  const checkoutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateTotal() {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    totalSpan.textContent = total.toFixed(2);
  }

  function renderCart() {
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-img" />
        <div class="cart-details">
          <div class="cart-name">${item.name}</div>
          <div class="cart-price">$${item.price} × ${item.quantity}</div>
          <div class="qty-control">
            <button onclick="updateQty(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${index}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">🗑 Remove</button>
      `;
      cartItemsList.appendChild(li);
    });
    updateTotal();
  }

  // Quantity update function
  window.updateQty = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    renderCart();
  };

  // Remove item function
  window.removeItem = function(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  };

  // RESET button logic
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        saveCart();
        renderCart();
      }
    });
  }

  // CHECKOUT button logic
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty.");
      } else {
        alert("✅ Checkout complete! (This is just a demo.)");
        cart = [];
        saveCart();
        renderCart();
      }
    });
  }

  renderCart();
});
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}
