// DOM Elements
const loader = document.querySelector('.loader');
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const loginBtn = document.querySelector('.login');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const logoutBtn = document.getElementById('logout-btn');
const backToTopBtn = document.getElementById('backToTop');
const quickViewBtns = document.querySelectorAll('.quick-view');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickViewModal = document.querySelector('#quickViewModal .close-modal');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.querySelector('#loginModal .close-modal');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const promoBanner = document.querySelector('.promo-banner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.querySelector('.search-btn');
const mobileLoginBtn = document.getElementById('mobile-login');
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
const cartBtns = document.querySelectorAll('.cart-btn');
const wishlistCount = document.getElementById('wishlist-count');
const cartCount = document.getElementById('cart-count');

// Global Variables
let currentSlide = 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let userData = JSON.parse(localStorage.getItem('userData')) || {
    name: 'Guest User',
    email: 'guest@example.com'
};

// Add this at the top of your script.js, after the Global Variables section
const productDetails = {
    "Leather Wallet": {
        description: "Premium genuine leather wallet with multiple card slots and a cash compartment. Handcrafted with attention to detail for durability and style.",
        features: [
            "Made from 100% genuine leather",
            "6 card slots + 1 ID window",
            "2 bill compartments",
            "RFID blocking technology",
            "Dimensions: 4.5 x 3.5 inches"
        ],
        rating: 4.5,
        reviews: 124,
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20240322/iteW/65fcf4c305ac7d77bbd132cf/-1117Wx1400H-462895038-maroon-MODEL.jpg",
            
        ]
    },
    "Formal Shirt": {
        description: "Classic slim-fit formal shirt made from premium cotton fabric. Perfect for office wear and formal occasions with a comfortable fit.",
        features: [
            "100% premium cotton",
            "Slim fit design",
            "Single button cuff",
            "Spread collar",
            "Machine washable"
        ],
        rating: 4,
        reviews: 89,
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20210216/EWwz/602accd4aeb2696981661cba/-473Wx593H-460545300-red-MODEL.jpg",
            
        ]
    },
    "Sunglasses": {
        description: "Polarized sunglasses with UV400 protection and lightweight frame. Stylish design that complements all face shapes.",
        features: [
            "100% UV protection",
            "Polarized lenses",
            "Lightweight metal frame",
            "Scratch-resistant coating",
            "Includes protective case"
        ],
        rating: 5,
        reviews: 256,
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20240713/RYgu/66922da46f60443f3106a1c1/-473Wx593H-464805313-brown-MODEL.jpg",
        ]
    },
    "Running Shoes": {
        description: "High-performance running shoes with responsive cushioning and breathable mesh upper. Designed for comfort during long runs.",
        features: [
            "Breathable mesh upper",
            "Responsive cushioning",
            "Rubber outsole for traction",
            "Removable insole",
            "Available in multiple colors"
        ],
        rating: 4.5,
        reviews: 342,
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20240109/iorz/659d61ed54c30e6276a01dda/-1117Wx1400H-469584839-green-MODEL.jpg",
            
        ]
    },
    "Apple iPad Air 13 inch": {
        description: "Powerful iPad Air with M1 chip, Liquid Retina display, and all-day battery life. Perfect for work, creativity, and entertainment.",
        features: [
            "13-inch Liquid Retina display",
            "M1 chip with Neural Engine",
            "12MP Wide camera",
            "5G capable",
            "Up to 256GB storage"
        ],
        rating: 4.5,
        reviews: 428,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlqowNwEwcychNL0VjQ4ZenGD-OQNEriJqA&s",
         
        ]
    },
    "Apple iPad Air 10.9 inch": {
        description: "Compact yet powerful iPad Air with A14 Bionic chip, perfect for productivity and entertainment on the go.",
        features: [
            "10.9-inch Liquid Retina display",
            "A14 Bionic chip",
            "Touch ID",
            "USB-C connector",
            "Supports Apple Pencil (2nd gen)"
        ],
        rating: 5,
        reviews: 512,
        images: [
            "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UL480_FMwebp_QL65_.jpg",
           
        ]
    },
    "Apple iPad 10th Gen": {
        description: "Latest iPad with powerful performance, beautiful display, and all-day battery life at an affordable price.",
        features: [
            "10.2-inch Retina display",
            "A13 Bionic chip",
            "8MP back camera",
            "Touch ID",
            "Supports Apple Pencil (1st gen)"
        ],
        rating: 4,
        reviews: 387,
        images: [
            "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_FMwebp_QL65_.jpg",
           
        ]
    },
    "Samsung Galaxy Tab": {
        description: "Premium Android tablet with stunning display, powerful processor, and S Pen support for productivity.",
        features: [
            "11-inch AMOLED display",
            "Snapdragon 8 Gen 2",
            "S Pen included",
            "12MP + 8MP cameras",
            "Up to 512GB storage"
        ],
        rating: 4.5,
        reviews: 276,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqP-jr9o1ht0wdFf_G3mPNvLO2_EVywYRsA&s",
       
        ]
    },
    "Samsung Galaxy Watch 7": {
        description: "Advanced smartwatch with health monitoring, fitness tracking, and long battery life.",
        features: [
            "1.4-inch AMOLED display",
            "Blood oxygen monitor",
            "ECG sensor",
            "5ATM water resistance",
            "Up to 7 days battery"
        ],
        rating: 4,
        reviews: 198,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUOu2R_hqzY8Ca8TCkaFJI6GBmVBOSqxa3Q&s",
            
        ]
    },
    "Apple Watch Series 10": {
        description: "The most advanced Apple Watch with revolutionary health monitoring features and premium design.",
        features: [
            "Always-On Retina display",
            "Blood oxygen sensor",
            "ECG app",
            "Water resistant 50m",
            "Up to 18 hours battery"
        ],
        rating: 5,
        reviews: 423,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9HTz1MgVUhsnXenBL-MON-ThVlwqpSw4sA&s",
          
        ]
    },
    "Samsung Galaxy Watch Ultra": {
        description: "Premium smartwatch with rugged design, advanced health features, and extreme durability.",
        features: [
            "1.6-inch AMOLED display",
            "Military-grade durability",
            "Advanced sleep tracking",
            "100m water resistance",
            "Up to 10 days battery"
        ],
        rating: 4.5,
        reviews: 156,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UszdUWLPajmF9jcYUigd9HsWs4eN1RIEog&s",
       
        ]
    },
    "Google Pixel Watch 3": {
        description: "Sleek smartwatch with Google integration, health tracking, and premium design.",
        features: [
            "1.3-inch AMOLED display",
            "Wear OS by Google",
            "Heart rate monitoring",
            "5ATM water resistance",
            "24-hour battery life"
        ],
        rating: 4,
        reviews: 87,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnPGEQMzijg1BXXhQzUeEa8JIcdVCXKzxgw&s",
            
        ]
    },
    "Living the Artist Way": {
        description: "Inspirational guide to unleashing your creativity and living a more artistic life.",
        features: [
            "Paperback: 256 pages",
            "Publisher: Creative Press",
            "Language: English",
            "ISBN-10: 1234567890",
            "Dimensions: 5.5 x 0.8 x 8.5 inches"
        ],
        rating: 4.5,
        reviews: 342,
        images: [
            "https://m.media-amazon.com/images/I/51HqsTI7mcL._SY425_.jpg",
            
        ]
    },
    "Twisted Hate": {
        description: "A steamy enemies-to-lovers romance novel with intense chemistry and emotional depth.",
        features: [
            "Paperback: 320 pages",
            "Publisher: Romance House",
            "Language: English",
            "ISBN-10: 0987654321",
            "Dimensions: 5.2 x 0.9 x 8 inches"
        ],
        rating: 4,
        reviews: 287,
        images: [
            "https://m.media-amazon.com/images/I/71u59k0c6DL.jpg",
           
        ]
    },
    "The Fine Print": {
        description: "A captivating contemporary romance about love, ambition, and the choices we make.",
        features: [
            "Paperback: 280 pages",
            "Publisher: Modern Love Press",
            "Language: English",
            "ISBN-10: 1122334455",
            "Dimensions: 5.3 x 0.7 x 8.2 inches"
        ],
        rating: 5,
        reviews: 512,
        images: [
            "https://m.media-amazon.com/images/I/819Vqf+FQwL._UF1000,1000_QL80_.jpg",
           
        ]
    },
    "Verity": {
        description: "A psychological thriller that will keep you on the edge of your seat until the shocking conclusion.",
        features: [
            "Hardcover: 336 pages",
            "Publisher: Thriller House",
            "Language: English",
            "ISBN-10: 5566778899",
            "Dimensions: 6 x 1.2 x 9 inches"
        ],
        rating: 4.5,
        reviews: 876,
        images: [
            "https://m.media-amazon.com/images/I/91868k2+gUL.jpg",
            
        ]
    }
};
// Initialize the page
function init() {
    // Hide loader after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    // Update cart and wishlist counts
    updateCartCount();
    updateWishlistCount();

    // Set user data if logged in
    if (isLoggedIn) {
        updateUserUI();
    }

    // Auto-rotate banner every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 4000);
}

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Login Button Click
loginBtn.addEventListener('click', () => {
    if (isLoggedIn) {
        sidebar.classList.add('open');
    } else {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

// Mobile Login Button Click
mobileLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    mobileMenu.classList.remove('active');
});

// Close Sidebar
closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Logout Functionality
logoutBtn.addEventListener('click', () => {
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    sidebar.classList.remove('open');
    updateUserUI();
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Quick View Modal
// Then update the quickViewBtns.forEach section to use this data:
quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        const originalPrice = productCard.querySelector('.original-price')?.textContent || '';
        const discount = productCard.querySelector('.discount')?.textContent || '';
        const rating = productCard.querySelector('.product-rating').innerHTML;
        const productImg = productCard.querySelector('.product-img img').src;

        // Get product details from our database
        const product = productDetails[productName] || {
            description: `Premium quality ${productName.toLowerCase()} with excellent features.`,
            features: [
                
            ],
            images: [productImg]
        };

        // Set modal content
        document.getElementById('modalProductName').textContent = productName;
        document.getElementById('modalCurrentPrice').textContent = productPrice;
        document.getElementById('modalOriginalPrice').textContent = originalPrice;
        document.getElementById('modalDiscount').textContent = discount;
        document.getElementById('modalProductRating').innerHTML = rating;
        document.getElementById('modalMainImage').src = product.images[0];
        
        // Set product description and features
        document.getElementById('modalProductDescription').textContent = product.description;
        
        const featuresList = document.getElementById('modalProductFeatures');
        featuresList.innerHTML = '';
        
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Set thumbnail images
        const thumbnailsContainer = document.querySelector('.thumbnail-images');
        thumbnailsContainer.innerHTML = '';
        
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${productName} thumbnail ${index + 1}`;
            thumbnail.addEventListener('click', () => {
                document.getElementById('modalMainImage').src = image;
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Set modal buttons
        document.getElementById('modalWishlistBtn').onclick = () => {
            addToWishlist(productName, parseInt(productPrice.replace(/[^\d]/g, '')), productImg);
            quickViewModal.style.display = 'none';
        };

        document.getElementById('modalCartBtn').onclick = () => {
            addToCart(productName, parseInt(productPrice.replace(/[^\d]/g, '')), productImg);
            quickViewModal.style.display = 'none';
        };

        quickViewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close Quick View Modal
closeQuickViewModal.addEventListener('click', () => {
    quickViewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close Login Modal
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === quickViewModal) {
        quickViewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Auth Tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        tabBtns.forEach(tab => tab.classList.remove('active'));
        // Add active class to clicked tab
        btn.classList.add('active');
        
        // Hide all forms
        authForms.forEach(form => form.style.display = 'none');
        // Show the corresponding form
        document.getElementById(`${btn.dataset.tab}Form`).style.display = 'block';
    });
});

// Login Form Submission
document.querySelector('#loginForm form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (email && password) {
        // In a real app, you would verify credentials with a server
        isLoggedIn = true;
        userData = {
            name: 'John Doe', // This would come from your authentication system
            email: email
        };
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
        
        updateUserUI();
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form
        e.target.reset();
    } else {
        alert('Please enter both email and password');
    }
});

// Register Form Submission
document.querySelector('#registerForm form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Simple validation
    if (name && email && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // In a real app, you would register the user with a server
        isLoggedIn = true;
        userData = {
            name: name,
            email: email
        };
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
        
        updateUserUI();
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form
        e.target.reset();
        
        // Switch to login tab (for UX)
        tabBtns[0].click();
    } else {
        alert('Please fill in all fields');
    }
});

// Banner Slider Functions
function showSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.promo-banner').style.transform = `translateX(${offset}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Banner Navigation
document.querySelector('.prev-btn')?.addEventListener('click', prevSlide);
document.querySelector('.next-btn')?.addEventListener('click', nextSlide);

// Dot Navigation
document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Auto-rotate banner every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-rotation when hovering over banner
document.querySelector('.promo-banner-container')?.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-rotation when mouse leaves banner
document.querySelector('.promo-banner-container')?.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 4000);
});

// Initialize the banner
showSlide(0);

// Banner Navigation
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Dot Navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Search Functionality
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchBar.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // In a real app, you would redirect to search results page or filter products
        searchBar.value = '';
    }
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click();
    }
});

// Add to Wishlist
function addToWishlist(name, price, image) {
    if (!isLoggedIn) {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        return;
    }
    
    const existingItem = wishlistItems.find(item => item.name === name);
    
    if (existingItem) {
        alert('This item is already in your wishlist');
    } else {
        wishlistItems.push({ name, price, image });
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        updateWishlistCount();
        alert(`${name} has been added to your wishlist`);
    }
}

// Add to Cart
function addToCart(name, price, image) {
    const existingItem = cartItems.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name, price, image, quantity: 1 });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    alert(`${name} has been added to your cart`);
}

// Update Wishlist Count
function updateWishlistCount() {
    wishlistCount.textContent = wishlistItems.length;
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update User UI
function updateUserUI() {
    if (isLoggedIn) {
        document.getElementById('login-text').textContent = userData.name.split(' ')[0];
        document.getElementById('sidebar-name').textContent = userData.name;
        document.getElementById('sidebar-email').textContent = userData.email;
        document.getElementById('mobile-login span').textContent = userData.name.split(' ')[0];
    } else {
        document.getElementById('login-text').textContent = 'Login';
        document.getElementById('sidebar-name').textContent = 'Guest User';
        document.getElementById('sidebar-email').textContent = 'guest@example.com';
        document.getElementById('mobile-login span').textContent = 'Login';
    }
}

// Initialize Wishlist Buttons
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = btn.closest('.product-card');
        const name = productCard.querySelector('h3').textContent;
        const price = parseInt(productCard.querySelector('.current-price').textContent.replace(/[^\d]/g, ''));
        const image = productCard.querySelector('.product-img img').src;
        
        addToWishlist(name, price, image);
    });
});

// Initialize Cart Buttons
cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = btn.closest('.product-card');
        const name = productCard.querySelector('h3').textContent;
        const price = parseInt(productCard.querySelector('.current-price').textContent.replace(/[^\d]/g, ''));
        const image = productCard.querySelector('.product-img img').src;
        
        addToCart(name, price, image);
    });
});

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);