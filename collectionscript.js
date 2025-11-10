const products = [
  {
    name: "Urban Fit 1",
    price: 260,
    image: "pictures/men 001.png",
    desc: "white Elegant.",
  },
  {
    name: "Urban Fit 2",
    price: 180,
    image: "pictures/FB_IMG_1588874556642.jpg",
    desc: "Casual bold streetwear.",
  },
  {
    name: "Urban Fit 3",
    price: 300,
    image: "pictures/men 002 500x300.png",
    desc: "Classic touch with modern fit.",
  },
  {
    name: "Urban Fit 4",
    price: 130,
    image: "pictures/female 003.jpg",
    desc: "Colorful and vibrant.",
  },
  {
    name: "Urban Fit 5",
    price: 500,
    image: "pictures/men 004.png",
    desc: "Royal 3 pieces.",
  },
  {
    name: "Urban Fit 6",
    price: 200,
    image: "pictures/female 007.jpg",
    desc: "Ankara Trouser with Top.",
  },
  {
    name: "Urban Fit 7",
    price: 150,
    image: "pictures/FB_IMG_1593039073067.jpg",
    desc: "simple short gown.",
  },
  {
    name: "Urban Fit 8",
    price: 310,
    image: "pictures/men 006.png",
    desc: "Elegant senator wear.",
  },
  {
    name: "Urban Fit 9",
    price: 650,
    image: "pictures/femal 002.png",
    desc: "Palmas Trouser with Black Top.",
  },
  {
    name: "Urban Fit 10",
    price: 520,
    image: "pictures/men 200.png",
    desc: "white and Black Design.",
  },
  {
    name: "Urban Fit 11",
    price: 350,
    image: "pictures/female 1200.jpg",
    desc: "Off shoulder Ankara Design .",
  },
  {
    name: "Urban Fit  12",
    price: 260,
    image: "pictures/men 005.png",
    desc: "Buba Rex Design.",
  },
  {
    name: "Urban Fit 13",
    price: 180,
    image: "pictures/female 035.jpg",
    desc: "Ankara Trouser with Top.",
  },
  {
    name: "Urban Fit 14",
    price: 1000,
    image: "pictures/men 003.png",
    desc: "Elegant 3 pieces for Men.",
  },
  {
    name: "Urban Fit 15",
    price: 240,
    image: "pictures/female 170.png",
    desc: "Free short gown for Ladies.",
  },
  {
    name: "Urban Fit 16",
    price: 400,
    image: "pictures/male 222.png",
    desc: "Blue long sleeve senator for Men.",
  },
  {
    name: "Urban Fit 17",
    price: 570,
    image: "pictures/female 456.png",
    desc: "Elegant for ladies.",
  },
  {
    name: "Urban Fit 18",
    price: 490,
    image: "pictures/male 463.png",
    desc: "long sleeve for Men.",
  },
  {
    name: "Urban Fit 19",
    price: 500,
    image: "pictures/female 332.png",
    desc: "Long sleeve pieces for Women.",
  },
  {
    name: "Urban Fit 20",
    price: 380,
    image: "pictures/male 657.png",
    desc: "long senator for Men.",
  },
  {
    name: "Urban Fit 21",
    price: 360,
    image: "pictures/female 484.png",
    desc: "Ankara gown.",
  },
  {
    name: "Urban Fit 22",
    price: 450,
    image: "pictures/men 007.jpg",
    desc: "short sleeve for Men.",
  },
  {
    name: "Urban Fit 23",
    price: 1200,
    image: "pictures/female 030.png",
    desc: "Long gown for Women.",
  },
  {
    name: "Urban Fit 24",
    price: 800,
    image: "pictures/male 2020.png",
    desc: "long sleeve senator for Men.",
  },
  {
    name: "Urban Fit 25",
    price: 300,
    image: "pictures/female 410.png",
    desc: "Short Ankara gown for sexy ladies.",
  },
  {
    name: "Urban Fit 26",
    price: 680,
    image: "pictures/male 2021.png",
    desc: "Elegant senator for Men.",
  },
  {
    name: "Urban Fit 27",
    price: 480,
    image: "pictures/female 419.png",
    desc: "Free flown gown for ladies.",
  },
  {
    name: "Urban Fit 28",
    price: 1050,
    image: "pictures/suit 006.png",
    desc: "Elegant suit for Men.",
  },
  {
    name: "Urban Fit 29",
    price: 1700,
    image: "pictures/suit 009.png",
    desc: "Nice suit for Men.",
  },
  {
    name: "Urban Fit 30",
    price: 1100,
    image: "pictures/suit 003.png",
    desc: "Elegant white suit with designs for Men.",
  },
  {
    name: "Urban Fit 31",
    price: 180,
    image: "pictures/female 300.jpg",
    desc: "casual wear.",
  },
  {
    name: "Urban Fit 32",
    price: 2000,
    image: "pictures/suit 007.png",
    desc: "Premium luxury men’s suit.",
  },
];

// Dynamically render all product items
const gallery = document.getElementById("gallery");
products.forEach((product, index) => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="openModal(${index})">View Details</button>
  `;
  gallery.appendChild(item);
});

// Modal logic
let currentProductIndex = 0;

function openModal(index) {
  currentProductIndex = index;
  const product = products[index];
  document.getElementById(
    "modalImg"
  ).src = `${product.image}`;
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalDesc").innerText = product.desc;
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Cart logic
//const cart = [];
const cartList = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

document.getElementById("modalAddToCart").addEventListener("click", () => {
  const product = products[currentProductIndex];
  const size = document.getElementById("modalSize").value;
  const color = document.getElementById("modalColor").value;

  cart.push({ ...product, size, color });
  renderCart();
  closeModal();
});

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.size}, ${item.color} - $${item.price}`;
    cartList.appendChild(li);
  });

  totalEl.textContent = total;
}
// Dynamically generate 20 look items
//const gallery = document.querySelector('.gallery');
for (let i = 2; i <= 20; i++) {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <img src="${i}.png" alt="Item ${i}">
    <h3>Item ${i}</h3>
    <p>$${(i * 10).toFixed(2)}</p>
    <button class="add-to-cart" data-name="Item ${i}" data-price="${(i * 10).toFixed(2)}">Add to Cart</button>
  `;
  gallery.appendChild(item);
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

document.getElementById('order-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  alert('Thank you for your order! We’ll contact you soon.');
  cart = [];
  updateCart();
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}
