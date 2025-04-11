document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || "index.html";
  
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });

  // Function to get cart items from localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to save the updated cart to localStorage
function saveCartItems(cartItems) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartItems = getCartItems();
    const cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to add an item to the cart
function addToCart(item) {
    const cartItems = getCartItems();
    cartItems.push(item); // Add the new item to the cart
    saveCartItems(cartItems); // Save the updated cart
    updateCartCount(); // Update the cart count in the navbar
}

// Function to remove an item from the cart by index
function removeFromCart(itemIndex) {
    const cartItems = getCartItems();
    cartItems.splice(itemIndex, 1); // Remove the item at the given index
    saveCartItems(cartItems); // Save the updated cart
    updateCartCount(); // Update the cart count in the navbar
}

// Call the updateCartCount function when the page loads to set the initial count
window.onload = function() {
    updateCartCount();
};
