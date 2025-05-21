// DOM Elements
const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('search-bar');
const genreFilter = document.getElementById('genre-filter');
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

// Books data
const books = [
    {
        id: 1,
        name: 'A Good Girl Guide\'s to Murder',
        genre: 'thriller',
        price: 499,
        originalPrice: 599,
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380325140/FU/HN/QS/189776554/a-good-girls-guide-to-murder-novel-book-250x250.jpg',
        details: {
            'Author': 'Holly Jackson',
            'Pages': '433',
            'Publisher': 'Electric Monkey',
            'Language': 'English',
            'ISBN': '9781405293181'
        },
        rating: 4.5,
        reviews: 124
    },
    {
        id: 2,
        name: 'Twisted Hate',
        genre: 'romance',
        price: 249,
        originalPrice: 399,
        image: 'https://www.madrasshoppe.com/212167-home_default/twisted-hate-the-tiktok-sensation-fall-into-a-world-of-addictive-romance-a-huang.jpg',
        details: {
            'Author': 'Ana Huang',
            'Pages': '480',
            'Publisher': 'Bloom Books',
            'Language': 'English',
            'ISBN': '9781728276120'
        },
        rating: 4.2,
        reviews: 89
    },
    {
        id: 3,
        name: 'The Fine Print',
        genre: 'romance',
        price: 299,
        originalPrice: 399,
        image: 'https://m.media-amazon.com/images/I/819Vqf+FQwL._UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Lauren Asher',
            'Pages': '512',
            'Publisher': 'Bloom Books',
            'Language': 'English',
            'ISBN': '9781955119006'
        },
        rating: 4.3,
        reviews: 76
    },
    {
        id: 4,
        name: 'Verity',
        genre: 'thriller',
        price: 599,
        originalPrice: 799,
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/1/k/q/verity-original-imaghwx2mfdbfzfw.jpeg?q=90&crop=false',
        details: {
            'Author': 'Colleen Hoover',
            'Pages': '336',
            'Publisher': 'Grand Central Publishing',
            'Language': 'English',
            'ISBN': '9781538724736'
        },
        rating: 4.7,
        reviews: 215
    },
    {
        id: 5,
        name: 'Living the Artist Way',
        genre: 'self-help',
        price: 399,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/51HqsTI7mcL._SR290,290_.jpg',
        details: {
            'Author': 'Julia Cameron',
            'Pages': '272',
            'Publisher': 'Penguin Life',
            'Language': 'English',
            'ISBN': '9780241641258'
        },
        rating: 4.1,
        reviews: 42
    },
    {
        id: 6,
        name: 'The Great Adventure',
        genre: 'fiction',
        price: 399,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/71U3cVLJSfL._UX250_.jpg',
        details: {
            'Author': 'John Doe',
            'Pages': '320',
            'Publisher': 'Adventure Press',
            'Language': 'English',
            'ISBN': '9781234567890'
        },
        rating: 4.0,
        reviews: 56
    },
    {
        id: 7,
        name: 'King of Wrath',
        genre: 'romance',
        price: 599,
        originalPrice: 799,
        image: 'https://m.media-amazon.com/images/I/61eWVzkcXFL._UX250_.jpg',
        details: {
            'Author': 'Ana Huang',
            'Pages': '448',
            'Publisher': 'Bloom Books',
            'Language': 'English',
            'ISBN': '9781728276137'
        },
        rating: 4.4,
        reviews: 93
    },
    {
        id: 8,
        name: 'The Hating Game',
        genre: 'romance',
        price: 299,
        originalPrice: 399,
        image: 'https://www.vandegriftvoice.com/wp-content/uploads/2021/12/thehating-675x900.jpg',
        details: {
            'Author': 'Sally Thorne',
            'Pages': '384',
            'Publisher': 'William Morrow Paperbacks',
            'Language': 'English',
            'ISBN': '9780062439598'
        },
        rating: 4.2,
        reviews: 187
    },
    {
        id: 9,
        name: 'The Love Hypothesis',
        genre: 'romance',
        price: 299,
        originalPrice: 399,
        image: 'https://m.media-amazon.com/images/I/71NQA2hdyvL._AC_UF350,350_QL80_.jpg',
        details: {
            'Author': 'Ali Hazelwood',
            'Pages': '384',
            'Publisher': 'Berkley',
            'Language': 'English',
            'ISBN': '9780593336823'
        },
        rating: 4.5,
        reviews: 234
    },
    {
        id: 10,
        name: 'Outlander',
        genre: 'fiction',
        price: 399,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/713vO8R8lXL._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Diana Gabaldon',
            'Pages': '896',
            'Publisher': 'Delta',
            'Language': 'English',
            'ISBN': '9780440242949'
        },
        rating: 4.7,
        reviews: 312
    },
    {
        id: 11,
        name: 'Pride and Prejudice',
        genre: 'fiction',
        price: 499,
        originalPrice: 599,
        image: 'https://m.media-amazon.com/images/I/71IyEiuhDYL._AC_UF350,350_QL80_.jpg',
        details: {
            'Author': 'Jane Austen',
            'Pages': '432',
            'Publisher': 'Penguin Classics',
            'Language': 'English',
            'ISBN': '9780141439518'
        },
        rating: 4.8,
        reviews: 456
    },
    {
        id: 12,
        name: 'The Kiss Quotient',
        genre: 'romance',
        price: 599,
        originalPrice: 799,
        image: 'https://m.media-amazon.com/images/I/710fBod-ikL._AC_UC200,200_CACC,200,200_QL85_.jpg?aicid=community-reviews',
        details: {
            'Author': 'Helen Hoang',
            'Pages': '336',
            'Publisher': 'Berkley',
            'Language': 'English',
            'ISBN': '9780451490803'
        },
        rating: 4.3,
        reviews: 178
    },
    {
        id: 13,
        name: 'The Notebook',
        genre: 'romance',
        price: 199,
        originalPrice: 299,
        image: 'https://m.media-amazon.com/images/I/71U6ihpqo8L._AC_UC200,200_CACC,200,200_QL85_.jpg?aicid=community-reviews',
        details: {
            'Author': 'Nicholas Sparks',
            'Pages': '214',
            'Publisher': 'Grand Central Publishing',
            'Language': 'English',
            'ISBN': '9780446605236'
        },
        rating: 4.7,
        reviews: 289
    },
    {
        id: 14,
        name: 'The Art of War',
        genre: 'self-help',
        price: 249,
        originalPrice: 349,
        image: 'https://m.media-amazon.com/images/I/710U9WNIC1L._AC_UF350,350_QL80_.jpg',
        details: {
            'Author': 'Sun Tzu',
            'Pages': '273',
            'Publisher': 'Independently published',
            'Language': 'English',
            'ISBN': '9781528718575'
        },
        rating: 4.6,
        reviews: 167
    },
    {
        id: 15,
        name: 'Warmth',
        genre: 'fiction',
        price: 499,
        originalPrice: 599,
        image: 'https://rukminim1.flixcart.com/image/300/300/xif0q/book/q/a/y/warmth-original-imah7392zcjf9htg.jpeg',
        details: {
            'Author': 'Daniel Sherrell',
            'Pages': '224',
            'Publisher': 'Penguin Press',
            'Language': 'English',
            'ISBN': '9780593297581'
        },
        rating: 4.0,
        reviews: 32
    },
    {
        id: 16,
        name: 'Me Before You',
        genre: 'romance',
        price: 499,
        originalPrice: 599,
        image: 'https://m.media-amazon.com/images/I/71dzw8F3B+L._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Jojo Moyes',
            'Pages': '369',
            'Publisher': 'Penguin Books',
            'Language': 'English',
            'ISBN': '9780718157838'
        },
        rating: 4.6,
        reviews: 198
    },
    {
        id: 17,
        name: 'The Boyfriend Project',
        genre: 'romance',
        price: 299,
        originalPrice: 399,
        image: 'https://rukminim2.flixcart.com/image/850/1000/kltryq80/book/0/6/w/the-boyfriend-project-original-imagyvfnhxzhnay9.jpeg?q=90&crop=false',
        details: {
            'Author': 'Farrah Rochon',
            'Pages': '336',
            'Publisher': 'Forever',
            'Language': 'English',
            'ISBN': '9781538719105'
        },
        rating: 4.1,
        reviews: 87
    },
    {
        id: 18,
        name: 'Call Me By Your Name',
        genre: 'romance',
        price: 499,
        originalPrice: 599,
        image: 'https://m.media-amazon.com/images/I/81G7IEFyHIL._UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'André Aciman',
            'Pages': '256',
            'Publisher': 'Farrar, Straus and Giroux',
            'Language': 'English',
            'ISBN': '9780374299217'
        },
        rating: 4.4,
        reviews: 143
    },
    {
        id: 19,
        name: 'North and South',
        genre: 'fiction',
        price: 356,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/61KD6zCQi7L._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Elizabeth Gaskell',
            'Pages': '452',
            'Publisher': 'Penguin Classics',
            'Language': 'English',
            'ISBN': '9780140434248'
        },
        rating: 4.3,
        reviews: 76
    },
    {
        id: 20,
        name: 'The Princess Bride',
        genre: 'fantasy',
        price: 300,
        originalPrice: 399,
        image: 'https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'William Goldman',
            'Pages': '512',
            'Publisher': 'Bloomsbury Publishing',
            'Language': 'English',
            'ISBN': '9780747594183'
        },
        rating: 4.7,
        reviews: 231
    },
    {
        id: 21,
        name: 'Romeo and Juliet',
        genre: 'fiction',
        price: 354,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/61LQf6GWT4L._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'William Shakespeare',
            'Pages': '320',
            'Publisher': 'Simon & Schuster',
            'Language': 'English',
            'ISBN': '9780743477116'
        },
        rating: 4.8,
        reviews: 289
    },
    {
        id: 22,
        name: 'Beach Read',
        genre: 'romance',
        price: 400,
        originalPrice: 499,
        image: 'https://m.media-amazon.com/images/I/81DRbiDrKaL._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Emily Henry',
            'Pages': '384',
            'Publisher': 'Berkley',
            'Language': 'English',
            'ISBN': '9781984806734'
        },
        rating: 4.3,
        reviews: 167
    },
    {
        id: 23,
        name: 'It Ends with Us',
        genre: 'romance',
        price: 299,
        originalPrice: 399,
        image: 'https://m.media-amazon.com/images/I/712zD1rKTUL._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Colleen Hoover',
            'Pages': '384',
            'Publisher': 'Atria Books',
            'Language': 'English',
            'ISBN': '9781501110368'
        },
        rating: 4.7,
        reviews: 342
    },
    {
        id: 24,
        name: 'The Proposal',
        genre: 'romance',
        price: 499,
        originalPrice: 599,
        image: 'https://m.media-amazon.com/images/I/71htIG3jZ+L._AC_UF1000,1000_QL80_.jpg',
        details: {
            'Author': 'Jasmine Guillory',
            'Pages': '336',
            'Publisher': 'Berkley',
            'Language': 'English',
            'ISBN': '9780399587689'
        },
        rating: 4.1,
        reviews: 98
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
    genreFilter.addEventListener('change', filterProducts);
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
function loadProducts(products = books) {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No books found matching your criteria.</p>';
        return;
    }
    
    paginatedProducts.forEach(book => {
        const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${book.image}" alt="${book.name}">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showQuickView(${book.id})">Quick View</button>
            </div>
            <div class="product-info">
                <h3 onclick="showQuickView(${book.id})">${book.name}</h3>
                <div class="price">₹${book.price.toLocaleString('en-IN')}</div>
                <div class="actions">
                    <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${book.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${book.id})">
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
    const selectedGenre = genreFilter.value;
    const selectedPrice = priceFilter.value;
    
    let filteredBooks = books.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
        
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (selectedPrice.endsWith('+')) {
                matchesPrice = book.price >= 800;
            } else {
                matchesPrice = book.price >= min && book.price <= max;
            }
        }
        
        return matchesSearch && matchesGenre && matchesPrice;
    });
    
    currentPage = 1;
    loadProducts(filteredBooks);
}

// Show quick view modal
function showQuickView(bookId) {
    currentProduct = books.find(book => book.id === bookId);
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
    
    // Set book details
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
function toggleWishlist(bookId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your wishlist');
        return;
    }
    
    const bookToToggle = bookId ? books.find(b => b.id === bookId) : currentProduct;
    if (!bookToToggle) return;
    
    const index = user.wishlist.findIndex(id => id === bookToToggle.id);
    
    if (index === -1) {
        user.wishlist.push(bookToToggle.id);
    } else {
        user.wishlist.splice(index, 1);
    }
    
    updateCartWishlistCount();
    updateWishlistButton();
    
    if (bookId) {
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
function addToCart(bookId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your cart');
        return;
    }
    
    const bookToAdd = bookId ? books.find(b => b.id === bookId) : currentProduct;
    if (!bookToAdd) return;
    
    const existingItem = user.cart.find(item => item.id === bookToAdd.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.push({
            id: bookToAdd.id,
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
    const totalProducts = books.length;
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