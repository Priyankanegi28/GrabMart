// DOM Elements
const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const wishlistCount = document.getElementById('wishlist-count');
const cartCount = document.getElementById('cart-count');
const loginLink = document.getElementById('login-link');
const loginText = document.getElementById('login-text');
const mobileLogin = document.getElementById('mobile-login');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const quickViewModal = document.getElementById('quickViewModal');
const closeModal = document.querySelector('.close-modal');
const modalMainImage = document.getElementById('modalMainImage');
const modalProductName = document.getElementById('modalProductName');
const modalCurrentPrice = document.getElementById('modalCurrentPrice');
const modalOriginalPrice = document.getElementById('modalOriginalPrice');
const modalDiscount = document.getElementById('modalDiscount');
const modalProductSpecs = document.getElementById('modalProductSpecs');
const modalWishlistBtn = document.getElementById('modalWishlistBtn');
const modalCartBtn = document.getElementById('modalCartBtn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageNumbers = document.querySelectorAll('.page-numbers span');

// Home & Kitchen data
const homeProducts = [
    {
        id: 1,
        name: 'Mixer Grinder',
        category: 'kitchen',
        price: 3499,
        originalPrice: 3999,
        image: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/mixer-grinder-juicer/m/x/z/glamore-4-jar-1000w-jet-black-mixer-grinder-bajaj-original-imah75djjx4frufr.jpeg?q=20&crop=false',
        details: {
            'Brand': 'Prestige',
            'Power': '750W',
            'Jars': '3',
            'Warranty': '2 years',
            'Material': 'Stainless Steel'
        },
        rating: 4.5,
        reviews: 342
    },
    {
        id: 2,
        name: 'Steel Blade Chopper',
        category: 'kitchen',
        price: 139,
        originalPrice: 199,
        image: 'https://images.meesho.com/images/products/273758574/ppbip_512.webp',
        details: {
            'Brand': 'Generic',
            'Material': 'Stainless Steel',
            'Type': 'Manual Chopper',
            'Capacity': '500ml',
            'Features': 'Non-slip base'
        },
        rating: 4.2,
        reviews: 187
    },
    {
        id: 3,
        name: 'Steel Oil Dispenser',
        category: 'kitchen',
        price: 350,
        originalPrice: 499,
        image: 'https://images.meesho.com/images/products/191818069/8fzg8_512.webp',
        details: {
            'Brand': 'Generic',
            'Material': 'Stainless Steel',
            'Capacity': '250ml',
            'Features': 'Drip-free spout',
            'Usage': 'Cooking oil dispenser'
        },
        rating: 4.3,
        reviews: 98
    },
    {
        id: 4,
        name: 'Silicon Spatula Set',
        category: 'kitchen',
        price: 323,
        originalPrice: 499,
        image: 'https://images.meesho.com/images/products/123371986/d1xct_512.webp',
        details: {
            'Brand': 'Generic',
            'Material': 'Food-grade silicone',
            'Pieces': '3',
            'Heat resistant': 'Up to 220°C',
            'Features': 'Non-scratch'
        },
        rating: 4.4,
        reviews: 156
    },
    {
        id: 5,
        name: 'Non-Stick Fry Pan',
        category: 'kitchen',
        price: 470,
        originalPrice: 699,
        image: 'https://judge.ttkprestige.com/media/catalog/product/7/6/7690-37279-IMG1.jpg',
        details: {
            'Brand': 'Prestige',
            'Diameter': '20cm',
            'Material': 'Aluminum with non-stick coating',
            'Heat resistant': 'Yes',
            'Warranty': '1 year'
        },
        rating: 4.6,
        reviews: 231
    },
    {
        id: 6,
        name: 'Glass Jar for Kitchen',
        category: 'storage',
        price: 713,
        originalPrice: 899,
        image: 'https://images.meesho.com/images/products/380663232/ufigu_512.webp',
        details: {
            'Brand': 'Generic',
            'Material': 'Glass with wooden lid',
            'Capacity': '1L',
            'Usage': 'Storage for dry foods',
            'Features': 'Airtight'
        },
        rating: 4.3,
        reviews: 87
    },
    {
        id: 7,
        name: 'Bamboo Cutting Board',
        category: 'kitchen',
        price: 799,
        originalPrice: 999,
        image: 'https://www.jiomart.com/images/product/original/rvmeaby3so/naayaab-craft-trendy-luxury-craft-pakka-sheesham-wood-bamboo-cutting-board-with-handle-chopping-board-for-kitchen-cutting-board-for-kitchen-vegetable-wooden-chopping-board-for-kitchen-size-32-x-22-x-2cm-product-images-orvmeaby3so-p602474237-0-202306191508.jpg?im=Resize=(420,420)',
        details: {
            'Brand': 'Naayaab Craft',
            'Material': 'Bamboo wood',
            'Size': '32 x 22 x 2cm',
            'Features': 'Natural, durable',
            'Maintenance': 'Hand wash only'
        },
        rating: 4.7,
        reviews: 124
    },
    {
        id: 8,
        name: 'Wine Rack Table Top Goblet Holder',
        category: 'dining',
        price: 799,
        originalPrice: 999,
        image: 'https://5.imimg.com/data5/ECOM/Default/2024/11/462976124/PS/RS/CO/184740997/61e-419o25l-500x500.jpg',
        details: {
            'Brand': 'Generic',
            'Material': 'Wood',
            'Capacity': '4 glasses',
            'Usage': 'Wine glass holder',
            'Style': 'Modern'
        },
        rating: 4.5,
        reviews: 76
    },
    {
        id: 9,
        name: 'White Plain Tea Cups Set',
        category: 'dining',
        price: 199,
        originalPrice: 299,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcF3MYj4p31E2HljkdbU5CTo-13b_ungONQ&s',
        details: {
            'Brand': 'Generic',
            'Material': 'Ceramic',
            'Pieces': '4',
            'Capacity': '200ml each',
            'Microwave safe': 'Yes'
        },
        rating: 4.4,
        reviews: 143
    },
    {
        id: 10,
        name: 'Wooden Pizza Pan',
        category: 'dining',
        price: 499,
        originalPrice: 699,
        image: 'https://images.meesho.com/images/products/111582472/friuf_512.jpg',
        details: {
            'Brand': 'Generic',
            'Material': 'Wood',
            'Diameter': '30cm',
            'Usage': 'Serving pizza',
            'Features': 'Handcrafted'
        },
        rating: 4.3,
        reviews: 67
    },
    {
        id: 11,
        name: 'Serving Tray',
        category: 'dining',
        price: 340,
        originalPrice: 499,
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plate-tray-dish/b/f/d/wooden-crisscross-rectangle-serving-tray-set-for-home-kitchen-original-imagrzzhzn6ypxpj.jpeg?q=20&crop=false',
        details: {
            'Brand': 'Generic',
            'Material': 'Wood',
            'Size': '30 x 20cm',
            'Usage': 'Serving food',
            'Style': 'Traditional'
        },
        rating: 4.2,
        reviews: 92
    },
    {
        id: 12,
        name: 'Lushomes Table Mat',
        category: 'dining',
        price: 635,
        originalPrice: 799,
        image: 'https://m.media-amazon.com/images/I/81FEved0L8L._AC_UF894,1000_QL80_.jpg',
        details: {
            'Brand': 'Lushomes',
            'Material': 'Fabric',
            'Size': '30 x 45cm',
            'Set of': '4',
            'Features': 'Water resistant'
        },
        rating: 4.6,
        reviews: 178
    },
    {
        id: 13,
        name: 'Glass Vase',
        category: 'decor',
        price: 560,
        originalPrice: 799,
        image: 'https://www.sphinx.co.in/wp-content/uploads/2024/04/Sphinx-iridescent-glass-vase-1.jpg',
        details: {
            'Brand': 'Sphinx',
            'Material': 'Glass',
            'Height': '25cm',
            'Style': 'Modern',
            'Usage': 'Flower vase'
        },
        rating: 4.5,
        reviews: 124
    },
    {
        id: 14,
        name: 'Dream Catcher',
        category: 'decor',
        price: 230,
        originalPrice: 399,
        image: 'https://m.media-amazon.com/images/I/71brAT3N3sL._AC_UF894,1000_QL80_.jpg',
        details: {
            'Brand': 'Generic',
            'Material': 'Feathers, beads, thread',
            'Diameter': '20cm',
            'Style': 'Bohemian',
            'Usage': 'Wall decoration'
        },
        rating: 4.1,
        reviews: 56
    },
    {
        id: 15,
        name: 'Wall Hanging',
        category: 'decor',
        price: 799,
        originalPrice: 999,
        image: 'https://ii1.pepperfry.com/media/catalog/product/m/e/1100x1210/metallic-musician--set-of-3--wall-hanging-in-multicolour-by-craft-tree-metallic-musician--set-of-3---pphfrh.jpg',
        details: {
            'Brand': 'Craft Tree',
            'Material': 'Metal',
            'Set of': '3',
            'Style': 'Ethnic',
            'Usage': 'Wall decoration'
        },
        rating: 4.8,
        reviews: 289
    },
    {
        id: 16,
        name: 'Rose Scented Pillar Candle',
        category: 'decor',
        price: 149,
        originalPrice: 199,
        image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013707248-1000013707247_01-2100.jpg',
        details: {
            'Brand': 'Home Centre',
            'Material': 'Paraffin wax',
            'Fragrance': 'Rose',
            'Burn time': '20 hours',
            'Dimensions': '7 x 7cm'
        },
        rating: 4.4,
        reviews: 156
    },
    {
        id: 17,
        name: 'Designer Wall Clock',
        category: 'decor',
        price: 299,
        originalPrice: 499,
        image: 'https://www.ikea.com/in/en/images/products/kuttersmycke-wall-clock-black__1061215_pe850324_s5.jpg?f=s',
        details: {
            'Brand': 'IKEA',
            'Material': 'Plastic',
            'Diameter': '30cm',
            'Type': 'Quartz movement',
            'Style': 'Modern'
        },
        rating: 4.3,
        reviews: 87
    },
    {
        id: 18,
        name: 'Plants',
        category: 'decor',
        price: 179,
        originalPrice: 299,
        image: 'https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-low-maintenance-indoor-plants-for-home-decoration-16969011855500_600x.jpg?v=1634223451',
        details: {
            'Brand': 'NurseryLive',
            'Type': 'Indoor plants',
            'Set of': '3',
            'Maintenance': 'Low',
            'Benefits': 'Air purifying'
        },
        rating: 4.7,
        reviews: 124
    },
    {
        id: 19,
        name: 'Buddha Statue',
        category: 'decor',
        price: 250,
        originalPrice: 399,
        image: 'https://rukminim2.flixcart.com/image/850/1000/l3es13k0/showpiece-figurine/k/z/a/5-16-black-green-shading-buddha-with-two-plant-32-flipkart-original-imagejgghpawyxzx.jpeg?q=20&crop=false',
        details: {
            'Brand': 'Generic',
            'Material': 'Resin',
            'Height': '15cm',
            'Style': 'Zen',
            'Usage': 'Home decor'
        },
        rating: 4.5,
        reviews: 76
    },
    {
        id: 20,
        name: 'Monk Set of 4 Statue',
        category: 'decor',
        price: 499,
        originalPrice: 799,
        image: 'https://m.media-amazon.com/images/I/61z-SK9rT5L._AC_UF894,1000_QL80_.jpg',
        details: {
            'Brand': 'Generic',
            'Material': 'Resin',
            'Set of': '4 statues',
            'Height': '10cm each',
            'Style': 'Zen'
        },
        rating: 4.3,
        reviews: 67
    }
];

// User data
let user = {
    isLoggedIn: false,
    wishlist: [],
    cart: []
};

// Current product for quick view
let currentProduct = null;
let currentPage = 1;
const productsPerPage = 24;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartWishlistCount();
    checkLoginStatus();
    
    // Event listeners
    searchBar.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeModal.addEventListener('click', closeQuickView);
    modalWishlistBtn.addEventListener('click', toggleWishlist);
    modalCartBtn.addEventListener('click', addToCart);
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);
    
    pageNumbers.forEach((page, index) => {
        page.addEventListener('click', () => goToPage(index + 1));
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === quickViewModal) {
            closeQuickView();
        }
    });
});

// Load products to the grid
function loadProducts(products = homeProducts) {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No home & kitchen items found matching your criteria.</p>';
        return;
    }
    
    paginatedProducts.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showQuickView(${product.id})">Quick View</button>
            </div>
            <div class="product-info">
                <h3 onclick="showQuickView(${product.id})">${product.name}</h3>
                <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="actions">
                    <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    updatePagination(products.length);
}

// Filter products based on search and filters
function filterProducts() {
    const searchTerm = searchBar.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    
    let filteredProducts = homeProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (selectedPrice.endsWith('+')) {
                matchesPrice = product.price >= 3000;
            } else {
                matchesPrice = product.price >= min && product.price <= max;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    currentPage = 1;
    loadProducts(filteredProducts);
}

// Show quick view modal
function showQuickView(productId) {
    currentProduct = homeProducts.find(product => product.id === productId);
    if (!currentProduct) return;
    
    // Set main product info
    modalProductName.textContent = currentProduct.name;
    modalCurrentPrice.textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
    modalOriginalPrice.textContent = `₹${currentProduct.originalPrice.toLocaleString('en-IN')}`;
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    modalDiscount.textContent = `${discount}% off`;
    
    // Set main image
    modalMainImage.src = currentProduct.image;
    modalMainImage.alt = currentProduct.name;
    
    // Set product details
    modalProductSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(currentProduct.details)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${key}</span><span>${value}</span>`;
        modalProductSpecs.appendChild(li);
    }
    
    // Update rating
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    const fullStars = Math.floor(currentProduct.rating);
    const hasHalfStar = currentProduct.rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        if (i < fullStars) {
            star.className = 'fas fa-star';
        } else if (i === fullStars && hasHalfStar) {
            star.className = 'fas fa-star-half-alt';
        } else {
            star.className = 'far fa-star';
        }
        starsContainer.appendChild(star);
    }
    
    // Update review count
    document.querySelector('.review-count').textContent = `(${currentProduct.reviews} reviews)`;
    
    // Update wishlist button state
    updateWishlistButton();
    
    // Show modal
    quickViewModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close quick view modal
function closeQuickView() {
    quickViewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle product in wishlist
function toggleWishlist(productId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your wishlist');
        return;
    }
    
    const productToToggle = productId ? homeProducts.find(p => p.id === productId) : currentProduct;
    if (!productToToggle) return;
    
    const index = user.wishlist.findIndex(id => id === productToToggle.id);
    
    if (index === -1) {
        user.wishlist.push(productToToggle.id);
    } else {
        user.wishlist.splice(index, 1);
    }
    
    updateCartWishlistCount();
    updateWishlistButton();
    
    if (productId) {
        // If called from product card, show feedback
        const feedback = document.createElement('div');
        feedback.className = 'feedback-message';
        feedback.textContent = index === -1 ? 'Added to wishlist' : 'Removed from wishlist';
        feedback.style.backgroundColor = index === -1 ? 'var(--success)' : 'var(--error)';
        
        document.body.appendChild(feedback);
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
}

// Update wishlist button state
function updateWishlistButton() {
    if (!currentProduct) return;
    
    const isInWishlist = user.wishlist.includes(currentProduct.id);
    
    modalWishlistBtn.innerHTML = isInWishlist ? 
        '<i class="fas fa-heart"></i> Remove from Wishlist' : 
        '<i class="far fa-heart"></i> Add to Wishlist';
    
    modalWishlistBtn.style.color = isInWishlist ? 'var(--error)' : '';
}

// Add product to cart
function addToCart(productId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your cart');
        return;
    }
    
    const productToAdd = productId ? homeProducts.find(p => p.id === productId) : currentProduct;
    if (!productToAdd) return;
    
    const existingItem = user.cart.find(item => item.id === productToAdd.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.push({
            id: productToAdd.id,
            quantity: 1
        });
    }
    
    updateCartWishlistCount();
    
    // Show feedback
    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    feedback.textContent = 'Added to cart';
    feedback.style.backgroundColor = 'var(--success)';
    
    document.body.appendChild(feedback);
    setTimeout(() => {
        feedback.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 2000);
}

// Update cart and wishlist count
function updateCartWishlistCount() {
    wishlistCount.textContent = user.wishlist.length;
    cartCount.textContent = user.cart.reduce((total, item) => total + item.quantity, 0);
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Check login status
function checkLoginStatus() {
    // In a real app, this would check with your backend
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        user.isLoggedIn = true;
        loginText.textContent = 'My Account';
        mobileLogin.querySelector('span').textContent = 'My Account';
        
        // Load user data from localStorage
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            user.wishlist = savedUser.wishlist || [];
            user.cart = savedUser.cart || [];
            updateCartWishlistCount();
        }
    }
}

// Pagination functions
function updatePagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    // Update previous button
    prevBtn.disabled = currentPage === 1;
    
    // Update next button
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Update page numbers
    pageNumbers.forEach((page, index) => {
        if (index < totalPages) {
            page.style.display = 'flex';
            page.classList.toggle('active', index + 1 === currentPage);
        } else {
            page.style.display = 'none';
        }
    });
}

function goToPage(page) {
    currentPage = page;
    filterProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPrevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

function goToNextPage() {
    const totalProducts = homeProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// Simulate login (for demo purposes)
function simulateLogin() {
    user.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    checkLoginStatus();
}

// Simulate logout (for demo purposes)
function simulateLogout() {
    user.isLoggedIn = false;
    user.wishlist = [];
    user.cart = [];
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    checkLoginStatus();
    updateCartWishlistCount();
}

// Add click event to login link for demo
loginLink.addEventListener('click', (e) => {
    if (user.isLoggedIn) {
        e.preventDefault();
        const confirmLogout = confirm('Do you want to logout?');
        if (confirmLogout) {
            simulateLogout();
        }
    }
});

// Similarly for mobile login
mobileLogin.addEventListener('click', (e) => {
    if (user.isLoggedIn) {
        e.preventDefault();
        const confirmLogout = confirm('Do you want to logout?');
        if (confirmLogout) {
            simulateLogout();
            mobileMenu.classList.remove('active');
        }
    }
});

// For demo purposes - simulate login on page load
// Remove this in production and implement proper login flow
window.simulateLogin = simulateLogin;
window.simulateLogout = simulateLogout;
window.showQuickView = showQuickView;
window.toggleWishlist = toggleWishlist;
window.addToCart = addToCart;