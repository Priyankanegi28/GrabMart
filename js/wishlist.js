// DOM Elements
const wishlistContainer = document.getElementById('wishlist-items');
const emptyState = document.getElementById('wishlist-empty');
const wishlistCount = document.getElementById('wishlist-count');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayWishlist();
});

// Display Wishlist Items
function displayWishlist() {
    const wishlist = getWishlist();
    
    // Clear the container
    wishlistContainer.innerHTML = '';
    
    // Update count
    updateWishlistCount(wishlist.length);
    
    if (wishlist.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Create and append wishlist items
    wishlist.forEach((item, index) => {
        const itemElement = createWishlistItem(item, index);
        wishlistContainer.appendChild(itemElement);
    });
}

// Create Wishlist Item Element
function createWishlistItem(item, index) {
    const itemElement = document.createElement('div');
    itemElement.className = 'wishlist-item';
    
    itemElement.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <div class="item-price">₹${item.price.toLocaleString()}</div>
            <div class="item-actions">
                <button class="remove-btn" data-index="${index}">
                    <i class="fas fa-trash"></i> Remove
                </button>
                <button class="add-to-cart-btn" data-index="${index}">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return itemElement;
}

// Get Wishlist from LocalStorage
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlistItems')) || [];
}

// Update Wishlist Count
function updateWishlistCount(count) {
    const itemText = count === 1 ? 'item' : 'items';
    wishlistCount.textContent = `${count} ${itemText}`;
}

// Event Delegation for Buttons
wishlistContainer.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-btn');
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    
    if (removeBtn) {
        const index = parseInt(removeBtn.dataset.index);
        removeFromWishlist(index);
    }
    
    if (addToCartBtn) {
        const index = parseInt(addToCartBtn.dataset.index);
        moveToCart(index);
    }
});

// Remove Item from Wishlist
function removeFromWishlist(index) {
    let wishlist = getWishlist();
    wishlist.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
    displayWishlist();
    
    // Show toast notification
    showToast('Item removed from wishlist');
}

// Move Item to Cart
function moveToCart(index) {
    let wishlist = getWishlist();
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const item = wishlist[index];
    cart.push(item);
    
    wishlist.splice(index, 1);
    
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
    localStorage.setItem('cartItems', JSON.stringify(cart));
    
    displayWishlist();
    
    // Show toast notification
    showToast('Item added to cart');
}

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