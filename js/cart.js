// DOM Elements
const cartContainer = document.getElementById('cart-items');
const emptyState = document.getElementById('cart-empty');
const cartCount = document.getElementById('cart-count');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    calculateTotals();
});

// Display Cart Items
function displayCart() {
    const cart = getCart();
    
    // Clear the container
    cartContainer.innerHTML = '';
    
    // Update count
    updateCartCount(cart.length);
    
    if (cart.length === 0) {
        emptyState.style.display = 'block';
        document.querySelector('.cart-summary').style.display = 'none';
        return;
    }
    
    emptyState.style.display = 'none';
    document.querySelector('.cart-summary').style.display = 'block';
    
    // Create and append cart items
    cart.forEach((item, index) => {
        const itemElement = createCartItem(item, index);
        cartContainer.appendChild(itemElement);
    });
}

// Create Cart Item Element
function createCartItem(item, index) {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    
    itemElement.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <div class="item-price">₹${item.price.toLocaleString()}</div>
            <div class="item-quantity">
                <button class="quantity-btn minus" data-index="${index}">-</button>
                <span>${item.quantity || 1}</span>
                <button class="quantity-btn plus" data-index="${index}">+</button>
            </div>
            <div class="item-actions">
                <button class="remove-btn" data-index="${index}">
                    <i class="fas fa-trash"></i> Remove
                </button>
                <button class="save-btn" data-index="${index}">
                    <i class="fas fa-heart"></i> Save for Later
                </button>
            </div>
        </div>
    `;
    
    return itemElement;
}

// Get Cart from LocalStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Update Cart Count
function updateCartCount(count) {
    const itemText = count === 1 ? 'item' : 'items';
    cartCount.textContent = `${count} ${itemText}`;
}

// Calculate Order Totals
function calculateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    totalEl.textContent = `₹${subtotal.toLocaleString()}`;
}

// Event Delegation for Buttons
cartContainer.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-btn');
    const saveBtn = e.target.closest('.save-btn');
    const minusBtn = e.target.closest('.minus');
    const plusBtn = e.target.closest('.plus');
    
    if (removeBtn) {
        const index = parseInt(removeBtn.dataset.index);
        removeFromCart(index);
    }
    
    if (saveBtn) {
        const index = parseInt(saveBtn.dataset.index);
        moveToWishlist(index);
    }
    
    if (minusBtn) {
        const index = parseInt(minusBtn.dataset.index);
        updateQuantity(index, -1);
    }
    
    if (plusBtn) {
        const index = parseInt(plusBtn.dataset.index);
        updateQuantity(index, 1);
    }
});

// Remove Item from Cart
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    displayCart();
    calculateTotals();
    
    showToast('Item removed from cart');
}

// Move Item to Wishlist
function moveToWishlist(index) {
    let cart = getCart();
    let wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    
    const item = cart[index];
    wishlist.push(item);
    
    cart.splice(index, 1);
    
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
    
    displayCart();
    calculateTotals();
    
    showToast('Item saved for later');
}

// Update Item Quantity
function updateQuantity(index, change) {
    let cart = getCart();
    const item = cart[index];
    
    item.quantity = (item.quantity || 1) + change;
    
    // Ensure quantity doesn't go below 1
    if (item.quantity < 1) {
        item.quantity = 1;
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cart));
    displayCart();
    calculateTotals();
}

// Checkout Button
checkoutBtn.addEventListener('click', () => {
    // In a real app, this would redirect to checkout page
    showToast('Proceeding to checkout');
});

// Show Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}