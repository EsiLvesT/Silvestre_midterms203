let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  // Calculate the new index
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Move carousel items
  const offset = -currentIndex * 100; // 100% width for each item
  carousel.style.transform = `translateX(${offset}%)`;
}


// Automatic movement on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
  interval = setInterval(() => {
    moveCarousel(1); // Move to the next product automatically
  }, 3000); // Adjust the speed of transition (in ms)
});

carouselContainer.addEventListener('mouseleave', () => {
  clearInterval(interval); // Stop the interval when the mouse leaves
});

// Optional: Move to the previous or next product manually via buttons
document.querySelector('.carousel-buttons button:first-child').addEventListener('click', () => moveCarousel(-1)); // Left arrow
document.querySelector('.carousel-buttons button:last-child').addEventListener('click', () => moveCarousel(1)); // Right arrow


let cart = [];

function addToCart(itemName, price) {
  // Add item to cart
  cart.push({ itemName, price });
  updateCart();
}

function removeFromCart(itemName) {
  // Remove item from cart
  cart = cart.filter(item => item.itemName !== itemName);
  updateCart();
}

function updateCart() {
  // Update cart display
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.getElementById('total-price');
  cartItemsContainer.innerHTML = ''; // Clear current cart items

  let totalPrice = 0;

  // Loop through the cart and add each item to the cart container
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="images/${item.itemName.toLowerCase().replace(/\s/g, '')}.jpg" alt="${item.itemName}"/>
      <div class="cart-item-details">
        <h3>${item.itemName}</h3>
        <p class="price">₱${item.price}</p>
        <button class="cta-btn" onclick="removeFromCart('${item.itemName}')">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price;
  });

  // Update total price in the cart
  totalPriceElement.innerText = `₱${totalPrice}`;
  // Update cart item count
  document.getElementById('cart-count').innerText = cart.length;
}

// Example function for checkout (you can extend it)
function checkout() {
  if (cart.length > 0) {
    alert("Proceeding to checkout...");
    // Here, you can add your checkout logic
  } else {
    alert("Your cart is empty!");
  }
}
