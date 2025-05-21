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

// Electronics data
const electronics = [
    {
        id: 1,
        name: 'Smartphone',
        category: 'mobile',
        price: 25999,
        originalPrice: 29999,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/UK/KO/MJ/12959711/samsung-mobile-phones.jpg',
        details: {
            'Brand': 'Samsung',
            'Model': 'Galaxy S23',
            'RAM': '8GB',
            'Storage': '128GB',
            'Display': '6.1" AMOLED'
        },
        rating: 4.5,
        reviews: 342
    },
    {
        id: 2,
        name: 'Laptop Pro 15',
        category: 'laptop',
        price: 55000,
        originalPrice: 65000,
        image: 'https://images-cdn.ubuy.co.in/6511a6f4485ede30f811bc23-hp-15-6-screen-fhd-laptop-computer-amd.jpg',
        details: {
            'Brand': 'HP',
            'Processor': 'AMD Ryzen 7',
            'RAM': '16GB',
            'Storage': '512GB SSD',
            'Display': '15.6" FHD'
        },
        rating: 4.3,
        reviews: 187
    },
    {
        id: 3,
        name: 'Tablet Z2',
        category: 'tablet',
        price: 22499,
        originalPrice: 24999,
        image: 'https://www.oppo.com/content/dam/oppo/product-asset-library/accessory/oppo-pad-2/en/v1/assets/images-screen-mo-light-1.png.webp',
        details: {
            'Brand': 'Oppo',
            'Screen Size': '11.6"',
            'RAM': '6GB',
            'Storage': '128GB',
            'Battery': '8360mAh'
        },
        rating: 4.2,
        reviews: 98
    },
    {
        id: 4,
        name: 'Samsung S23',
        category: 'audio',
        price: 8999,
        originalPrice: 10999,
        image: 'https://m.media-amazon.com/images/I/81NIvQvg2WL.jpg',
        details: {
            'Brand': 'Samsung',
            'Type': 'Smart Watch',
            'Display': '1.4" AMOLED',
            'Battery Life': '3 days',
            'Waterproof': 'Yes'
        },
        rating: 4.4,
        reviews: 156
    },
    {
        id: 5,
        name: 'Noise Cancelling Headphones',
        category: 'audio',
        price: 5499,
        originalPrice: 6999,
        image: 'https://m.media-amazon.com/images/I/517lSvEVVsL.jpg',
        details: {
            'Brand': 'Sony',
            'Type': 'Over-ear',
            'Battery Life': '30 hours',
            'Wireless': 'Yes',
            'Noise Cancellation': 'Active'
        },
        rating: 4.6,
        reviews: 231
    },
    {
        id: 6,
        name: 'Portable Bluetooth Speaker',
        category: 'audio',
        price: 2999,
        originalPrice: 3999,
        image: 'https://m.media-amazon.com/images/I/715TP-NamOL.jpg',
        details: {
            'Brand': 'JBL',
            'Output': '20W',
            'Battery Life': '12 hours',
            'Waterproof': 'IPX7',
            'Connectivity': 'Bluetooth 5.1'
        },
        rating: 4.3,
        reviews: 87
    },
    {
        id: 7,
        name: 'DSLR Camera Pro',
        category: 'camera',
        price: 49999,
        originalPrice: 59999,
        image: 'https://photographylife.com/wp-content/uploads/2018/08/Nikon-D500.jpg',
        details: {
            'Brand': 'Nikon',
            'Sensor': 'APS-C',
            'Resolution': '20.9MP',
            'Lens Mount': 'Nikon F',
            'Video': '4K'
        },
        rating: 4.7,
        reviews: 124
    },
    {
        id: 8,
        name: 'Gaming Laptop RTX',
        category: 'laptop',
        price: 85000,
        originalPrice: 95000,
        image: 'https://m.media-amazon.com/images/I/71-Fx3Vfq5L.jpg',
        details: {
            'Brand': 'ASUS',
            'Processor': 'Intel i7',
            'GPU': 'RTX 3060',
            'RAM': '16GB',
            'Storage': '1TB SSD'
        },
        rating: 4.5,
        reviews: 76
    },
    {
        id: 9,
        name: 'Washing Machine',
        category: 'appliance',
        price: 19999,
        originalPrice: 22999,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYs9T-zTIurCTh2-8b03o84Wp6wWv9jXvqg&s',
        details: {
            'Brand': 'LG',
            'Capacity': '7kg',
            'Type': 'Front Load',
            'Energy Rating': 'A+++',
            'Features': 'Inverter Technology'
        },
        rating: 4.4,
        reviews: 143
    },
    {
        id: 10,
        name: 'Curved Gaming Monitor',
        category: 'laptop',
        price: 13500,
        originalPrice: 15999,
        image: 'https://m.media-amazon.com/images/I/71hV+-WWk6L.jpg',
        details: {
            'Brand': 'Samsung',
            'Size': '27"',
            'Resolution': '1920x1080',
            'Refresh Rate': '144Hz',
            'Panel': 'VA'
        },
        rating: 4.3,
        reviews: 67
    },
    {
        id: 11,
        name: 'HP Pavillion',
        category: 'laptop',
        price: 59999,
        originalPrice: 69999,
        image: 'https://m.media-amazon.com/images/I/71PJF9iogsL.jpg',
        details: {
            'Brand': 'HP',
            'Processor': 'Intel i5',
            'RAM': '8GB',
            'Storage': '512GB SSD',
            'Display': '15.6" FHD'
        },
        rating: 4.2,
        reviews: 92
    },
    {
        id: 12,
        name: 'Air Conditioner',
        category: 'appliance',
        price: 49999,
        originalPrice: 54999,
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/365302520/CN/NA/QX/109185640/daikin-split-ac-ftl.jpg',
        details: {
            'Brand': 'Daikin',
            'Type': 'Split AC',
            'Capacity': '1.5 Ton',
            'Energy Rating': '5 Star',
            'Features': 'Inverter'
        },
        rating: 4.6,
        reviews: 178
    },
    {
        id: 13,
        name: 'Dyson',
        category: 'appliance',
        price: 85000,
        originalPrice: 89999,
        image: 'https://www.jbhifi.com.au/cdn/shop/files/784329-Product-0-I-638628197418155482.jpg?v=1727223014',
        details: {
            'Brand': 'Dyson',
            'Type': 'Air Purifier',
            'Coverage': 'Large Room',
            'Features': 'HEPA Filter',
            'Smart': 'Yes'
        },
        rating: 4.5,
        reviews: 124
    },
    {
        id: 14,
        name: 'Straightner',
        category: 'appliance',
        price: 19999,
        originalPrice: 22999,
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317760727/RX/NQ/RW/47848477/mini-hair-straightener.jpg',
        details: {
            'Brand': 'Philips',
            'Type': 'Hair Straightener',
            'Plate Material': 'Ceramic',
            'Temperature Control': 'Yes',
            'Auto Shutoff': 'Yes'
        },
        rating: 4.1,
        reviews: 56
    },
    {
        id: 15,
        name: 'MacBook Pro',
        category: 'laptop',
        price: 100500,
        originalPrice: 109999,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-space-m1-2020_GEO_GB?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1628621766000',
        details: {
            'Brand': 'Apple',
            'Processor': 'M1 Chip',
            'RAM': '8GB',
            'Storage': '256GB SSD',
            'Display': '13.3" Retina'
        },
        rating: 4.8,
        reviews: 289
    },
    {
        id: 16,
        name: 'BOSS Quickmix Hand Blender',
        category: 'appliance',
        price: 3975,
        originalPrice: 4999,
        image: 'https://bossindia.com/wp-content/uploads/2019/09/B117-Black-New.jpg',
        details: {
            'Brand': 'BOSS',
            'Power': '450 watts',
            'Speed Settings': '2',
            'Attachments': '2',
            'Warranty': '2 years'
        },
        rating: 4.0,
        reviews: 43
    },
    {
        id: 17,
        name: 'Usb Rechargeable Blender',
        category: 'appliance',
        price: 2399,
        originalPrice: 2999,
        image: 'https://goodscity.in/wp-content/uploads/2023/05/Main-Image-USB-rechargable-blender.jpg',
        details: {
            'Brand': 'Portable',
            'Power': '150 watts',
            'Capacity': '400ml',
            'Charging Time': '2 hours',
            'Usage': 'Travel'
        },
        rating: 3.9,
        reviews: 32
    },
    {
        id: 18,
        name: 'Electric Kettle',
        category: 'appliance',
        price: 899,
        originalPrice: 1299,
        image: 'https://cdn.moglix.com/p/spg0Jm0GXXJmr-xxlarge.jpeg',
        details: {
            'Brand': 'Prestige',
            'Capacity': '1.5L',
            'Material': 'Stainless Steel',
            'Auto Shutoff': 'Yes',
            'Warranty': '1 year'
        },
        rating: 4.2,
        reviews: 87
    },
    {
        id: 19,
        name: 'Wireless Earbuds',
        category: 'audio',
        price: 799,
        originalPrice: 1299,
        image: 'https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988',
        details: {
            'Brand': 'Leaf',
            'Model': 'X121',
            'Battery Life': '4 hours',
            'Charging Case': 'Yes',
            'Bluetooth': '5.0'
        },
        rating: 3.8,
        reviews: 54
    },
    {
        id: 20,
        name: 'Electric Shaver',
        category: 'appliance',
        price: 899,
        originalPrice: 1199,
        image: 'https://images.philips.com/is/image/philipsconsumer/2dd0559013014093bbbfae7c0088d0f4?wid=700&hei=700&$pnglarge$',
        details: {
            'Brand': 'Philips',
            'Type': 'Dry Shaver',
            'Battery Life': '45 mins',
            'Waterproof': 'No',
            'Warranty': '2 years'
        },
        rating: 4.1,
        reviews: 76
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
function loadProducts(products = electronics) {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No electronics found matching your criteria.</p>';
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
    
    let filteredProducts = electronics.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (selectedPrice.endsWith('+')) {
                matchesPrice = product.price >= 50000;
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
    currentProduct = electronics.find(product => product.id === productId);
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
    
    const productToToggle = productId ? electronics.find(p => p.id === productId) : currentProduct;
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
    
    const productToAdd = productId ? electronics.find(p => p.id === productId) : currentProduct;
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
    const totalProducts = electronics.length;
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