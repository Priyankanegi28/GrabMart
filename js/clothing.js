// DOM Elements
const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const genderFilter = document.getElementById('gender-filter');
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
const sizeOptions = document.getElementById('sizeOptions');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageNumbers = document.querySelectorAll('.page-numbers span');

// Clothing data
const clothingItems = [
    {
        id: 1,
        name: 'Traditional Lehenga',
        category: 'ethnic',
        gender: 'women',
        price: 12999,
        originalPrice: 15999,
        images: [
            'https://shreeman.in/cdn/shop/files/Tulip06Mar230457copy.jpg?v=1720520975&width=1667'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Zari, Embroidery',
            'Occasion': 'Wedding, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Red'
        },
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.7,
        reviews: 89
    },
    {
        id: 2,
        name: 'Embroidered Saree',
        category: 'ethnic',
        gender: 'women',
        price: 8499,
        originalPrice: 9999,
        images: [
            'https://imagescdn.jaypore.com/img/app/product/3/39579135-11364102.jpg'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Embroidery',
            'Occasion': 'Festive, Party',
            'Pattern': 'Floral',
            'Color': 'Blue'
        },
        sizes: ['Free Size'],
        rating: 4.5,
        reviews: 67
    },
    {
        id: 3,
        name: 'Silk Kurta Set',
        category: 'ethnic',
        gender: 'women',
        price: 6199,
        originalPrice: 7999,
        images: [
            'https://vootbuy.in/cdn/shop/files/photo_6082311623084718188_y.jpg?v=1695017488'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Printed',
            'Occasion': 'Casual, Festive',
            'Pattern': 'Printed',
            'Color': 'Pink'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.3,
        reviews: 54
    },
    {
        id: 4,
        name: 'Black Chikankari Kurta',
        category: 'ethnic',
        gender: 'men',
        price: 799,
        originalPrice: 1299,
        images: [
            'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/NOVEMBER/16/3aN1s4u9_83245f2ff42847cf9566b78374581c89.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Chikankari',
            'Occasion': 'Casual, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Black'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.2,
        reviews: 112
    },
    {
        id: 5,
        name: 'Banarasi Saree',
        category: 'ethnic',
        gender: 'women',
        price: 9500,
        originalPrice: 11999,
        images: [
            'https://www.meenabazaar.shop/cdn/shop/products/MBS1002GREEN-10.jpg?v=1650832665'
        ],
        details: {
            'Fabric': 'Banarasi Silk',
            'Work': 'Zari',
            'Occasion': 'Wedding, Festive',
            'Pattern': 'Traditional',
            'Color': 'Green'
        },
        sizes: ['Free Size'],
        rating: 4.8,
        reviews: 76
    },
    {
        id: 6,
        name: 'Anarkali Dress',
        category: 'ethnic',
        gender: 'women',
        price: 7200,
        originalPrice: 8999,
        images: [
            'https://fabvilla.in/cdn/shop/files/redanarkali8_1366x.jpg?v=1683094892'
        ],
        details: {
            'Fabric': 'Georgette',
            'Work': 'Embroidery',
            'Occasion': 'Party, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Red'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.4,
        reviews: 43
    },
    {
        id: 7,
        name: 'White Cotton Casual Shirt',
        category: 'western',
        gender: 'men',
        price: 503,
        originalPrice: 799,
        images: [
            'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/17091614/2022/2/18/779ac019-8b8c-48f7-9c5e-b3e2fe3004b01645166457327-Men-White-Casual-Shirt-5731645166456476-1.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Fit': 'Regular',
            'Occasion': 'Casual',
            'Pattern': 'Solid',
            'Color': 'White'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.1,
        reviews: 98
    },
    {
        id: 8,
        name: 'Chikan Kari Kurta',
        category: 'ethnic',
        gender: 'women',
        price: 4899,
        originalPrice: 5999,
        images: [
            'https://www.oldmarigold.com/cdn/shop/files/IMG_5383.jpg?v=1712317219&width=2688'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Chikankari',
            'Occasion': 'Casual, Festive',
            'Pattern': 'Embroidered',
            'Color': 'White'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.6,
        reviews: 57
    },
    {
        id: 9,
        name: 'Designer Lehenga',
        category: 'ethnic',
        gender: 'women',
        price: 15299,
        originalPrice: 18999,
        images: [
            'https://anayadesignerstudio.com/cdn/shop/files/Unique-Wedding-Lehenga-For-Bride.jpg?v=1714631381'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Zari, Embroidery',
            'Occasion': 'Wedding',
            'Pattern': 'Embroidered',
            'Color': 'Pink'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.9,
        reviews: 34
    },
    {
        id: 10,
        name: 'Festive Saree',
        category: 'ethnic',
        gender: 'women',
        price: 11499,
        originalPrice: 13999,
        images: [
            'https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/2/_/2_52011.jpg'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Zari',
            'Occasion': 'Festive, Party',
            'Pattern': 'Traditional',
            'Color': 'Green'
        },
        sizes: ['Free Size'],
        rating: 4.7,
        reviews: 62
    },
    {
        id: 11,
        name: 'Kurti Set',
        category: 'ethnic',
        gender: 'women',
        price: 3299,
        originalPrice: 4499,
        images: [
            'https://tadastore.in/cdn/shop/files/IMG_3696.jpg?v=1708351806&width=1946'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Printed',
            'Occasion': 'Casual',
            'Pattern': 'Printed',
            'Color': 'Blue'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.3,
        reviews: 78
    },
    {
        id: 12,
        name: 'Checked Casual Shirt',
        category: 'western',
        gender: 'men',
        price: 649,
        originalPrice: 999,
        images: [
            'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27069302/2024/5/29/b5ea3bf3-8e66-406c-bcb7-a9cbf59ce9a91716970093493-HERENOW-Men-Shirts-9591716970092927-1.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Fit': 'Relaxed',
            'Occasion': 'Casual',
            'Pattern': 'Checked',
            'Color': 'Blue'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.0,
        reviews: 87
    },
    {
        id: 13,
        name: 'Jacket Kurta',
        category: 'fusion',
        gender: 'men',
        price: 5999,
        originalPrice: 7999,
        images: [
            'https://cityvibes.in/cdn/shop/files/095A4226.jpg?v=1690478326'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Block Print',
            'Occasion': 'Festive, Party',
            'Pattern': 'Printed',
            'Color': 'Blue'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.5,
        reviews: 39
    },
    {
        id: 14,
        name: 'Indo Western Set',
        category: 'fusion',
        gender: 'women',
        price: 9800,
        originalPrice: 11999,
        images: [
            'https://images.cbazaar.com/images/stylish-pink-chinon-silk-embroidered-indowestern-set-iwsuscc48205533-u.jpg'
        ],
        details: {
            'Fabric': 'Silk',
            'Work': 'Embroidery',
            'Occasion': 'Party, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Pink'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.6,
        reviews: 28
    },
    {
        id: 15,
        name: 'Cotton Casual Shirt',
        category: 'western',
        gender: 'men',
        price: 529,
        originalPrice: 799,
        images: [
            'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2503521/2018/4/23/11524484610524-Roadster-Men-Shirts-5391524484610330-1.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Fit': 'Slim',
            'Occasion': 'Casual',
            'Pattern': 'Solid',
            'Color': 'Blue'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.2,
        reviews: 112
    },
    {
        id: 16,
        name: 'Churidar Suit',
        category: 'ethnic',
        gender: 'women',
        price: 6500,
        originalPrice: 7999,
        images: [
            'https://images.sareeswholesale.com/festival-wear-wine-georgette-diamond-work-salwar-suit-170374.jpg'
        ],
        details: {
            'Fabric': 'Georgette',
            'Work': 'Diamond Work',
            'Occasion': 'Festive, Party',
            'Pattern': 'Embroidered',
            'Color': 'Wine'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.4,
        reviews: 47
    },
    {
        id: 17,
        name: 'Palazzo Kurti',
        category: 'ethnic',
        gender: 'women',
        price: 4399,
        originalPrice: 5999,
        images: [
            'https://stilento.com/cdn/shop/products/women-s-designer-pink-and-red-kurti-with-palazzo-set-stilento-1.jpg?v=1662802197'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Printed',
            'Occasion': 'Casual',
            'Pattern': 'Printed',
            'Color': 'Pink'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.3,
        reviews: 63
    },
    {
        id: 18,
        name: 'Anarkali Kurti',
        category: 'ethnic',
        gender: 'women',
        price: 8000,
        originalPrice: 9999,
        images: [
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/b/j/j/m-red-kurti-m-oyasvee-original-imaghqtshbm5wjg9.jpeg?q=90&crop=false'
        ],
        details: {
            'Fabric': 'Georgette',
            'Work': 'Embroidered',
            'Occasion': 'Party, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Red'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.5,
        reviews: 52
    },
    {
        id: 19,
        name: 'Georgette Saree',
        category: 'ethnic',
        gender: 'women',
        price: 7600,
        originalPrice: 8999,
        images: [
            'https://static.wixstatic.com/media/4594f8_ff7347cb7afc43cf909da1d7669e0f1c~mv2.jpg/v1/fill/w_480,h_644,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4594f8_ff7347cb7afc43cf909da1d7669e0f1c~mv2.jpg'
        ],
        details: {
            'Fabric': 'Georgette',
            'Work': 'Embroidery',
            'Occasion': 'Party, Festive',
            'Pattern': 'Embroidered',
            'Color': 'Pink'
        },
        sizes: ['Free Size'],
        rating: 4.6,
        reviews: 41
    },
    {
        id: 20,
        name: 'Fusion Kurti',
        category: 'fusion',
        gender: 'women',
        price: 3899,
        originalPrice: 4999,
        images: [
            'https://5.imimg.com/data5/ECOM/Default/2023/5/305135272/NS/EG/KN/52326283/anokherang-combos-copy-of-pink-fusion-printed-a-line-kurti-with-palazzo-39119420457209.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Printed',
            'Occasion': 'Casual',
            'Pattern': 'Printed',
            'Color': 'Pink'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.2,
        reviews: 59
    },
    {
        id: 21,
        name: 'Short Kurta',
        category: 'ethnic',
        gender: 'men',
        price: 999,
        originalPrice: 1499,
        images: [
            'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28932986/2024/4/15/de378498-9247-45b8-81a5-c309cc0fc5721713166779195JompersMenEthnicMotifsPathaniKurta1.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Printed',
            'Occasion': 'Casual',
            'Pattern': 'Printed',
            'Color': 'White'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.1,
        reviews: 76
    },
    {
        id: 22,
        name: 'Kanjivaram Saree',
        category: 'ethnic',
        gender: 'women',
        price: 13500,
        originalPrice: 15999,
        images: [
            'https://sudathi.com/cdn/shop/files/3953S506_1.jpg?v=1727433548&width=3840'
        ],
        details: {
            'Fabric': 'Kanjivaram Silk',
            'Work': 'Zari',
            'Occasion': 'Wedding, Festive',
            'Pattern': 'Traditional',
            'Color': 'Red'
        },
        sizes: ['Free Size'],
        rating: 4.8,
        reviews: 37
    },
    {
        id: 23,
        name: 'Grey T-shirt',
        category: 'western',
        gender: 'men',
        price: 329,
        originalPrice: 499,
        images: [
            'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/16997726/2022/2/17/7e310403-4a7e-4b03-b1d4-93b55d14a4681645083078794-Roadster-Men-Tshirts-4211645083078121-1.jpg'
        ],
        details: {
            'Fabric': 'Cotton',
            'Fit': 'Regular',
            'Occasion': 'Casual',
            'Pattern': 'Solid',
            'Color': 'Grey'
        },
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.3,
        reviews: 94
    },
    {
        id: 24,
        name: 'Patiala Salwar Set',
        category: 'ethnic',
        gender: 'women',
        price: 6800,
        originalPrice: 7999,
        images: [
            'https://www.lavanyathelabel.com/cdn/shop/files/LBL101KS988_1_1200x.jpg?v=1735979861'
        ],
        details: {
            'Fabric': 'Cotton',
            'Work': 'Printed',
            'Occasion': 'Casual, Festive',
            'Pattern': 'Printed',
            'Color': 'Blue'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.4,
        reviews: 51
    },
    {
        id: 25,
        name: 'Embroidered Lehenga',
        category: 'ethnic',
        gender: 'women',
        price: 14299,
        originalPrice: 16999,
        images: [
            'https://www.inddus.com/cdn/shop/products/beige-organza-embroidered-lehenga-choli-713641.jpg?v=1703144059'
        ],
        details: {
            'Fabric': 'Organza',
            'Work': 'Embroidery',
            'Occasion': 'Wedding',
            'Pattern': 'Embroidered',
            'Color': 'Beige'
        },
        sizes: ['S', 'M', 'L'],
        rating: 4.7,
        reviews: 29
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
const productsPerPage = 25;
let selectedSize = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartWishlistCount();
    checkLoginStatus();
    
    // Event listeners
    searchBar.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    genderFilter.addEventListener('change', filterProducts);
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
function loadProducts(products = clothingItems) {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No clothing items found matching your criteria.</p>';
        return;
    }
    
    paginatedProducts.forEach(item => {
        const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${item.images[0]}" alt="${item.name}">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showQuickView(${item.id})">Quick View</button>
            </div>
            <div class="product-info">
                <h3 onclick="showQuickView(${item.id})">${item.name}</h3>
                <div class="price">₹${item.price.toLocaleString('en-IN')}</div>
                <div class="actions">
                    <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${item.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
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
    const selectedGender = genderFilter.value;
    
    let filteredProducts = clothingItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesGender = selectedGender === 'all' || item.gender === selectedGender;
        
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (selectedPrice.endsWith('+')) {
                matchesPrice = item.price >= 6000;
            } else {
                matchesPrice = item.price >= min && item.price <= max;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice && matchesGender;
    });
    
    currentPage = 1;
    loadProducts(filteredProducts);
}

// Show quick view modal
function showQuickView(itemId) {
    currentProduct = clothingItems.find(item => item.id === itemId);
    if (!currentProduct) return;
    
    // Set main product info
    modalProductName.textContent = currentProduct.name;
    modalCurrentPrice.textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
    modalOriginalPrice.textContent = `₹${currentProduct.originalPrice.toLocaleString('en-IN')}`;
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    modalDiscount.textContent = `${discount}% off`;
    
    // Set main image
    modalMainImage.src = currentProduct.images[0];
    modalMainImage.alt = currentProduct.name;
    
    // Set thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    thumbnailContainer.innerHTML = '';
    
    currentProduct.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${currentProduct.name} - ${index + 1}`;
        thumbnail.addEventListener('click', () => {
            modalMainImage.src = image;
        });
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Set product details
    modalProductSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(currentProduct.details)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${key}</span><span>${value}</span>`;
        modalProductSpecs.appendChild(li);
    }
    
    // Set size options
    sizeOptions.innerHTML = '';
    currentProduct.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            sizeOption.classList.add('selected');
            selectedSize = size;
        });
        sizeOptions.appendChild(sizeOption);
    });
    
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
    
    // Reset selected size
    selectedSize = null;
    
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
function toggleWishlist(itemId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your wishlist');
        return;
    }
    
    const itemToToggle = itemId ? clothingItems.find(i => i.id === itemId) : currentProduct;
    if (!itemToToggle) return;
    
    const index = user.wishlist.findIndex(id => id === itemToToggle.id);
    
    if (index === -1) {
        user.wishlist.push(itemToToggle.id);
    } else {
        user.wishlist.splice(index, 1);
    }
    
    updateCartWishlistCount();
    updateWishlistButton();
    
    if (itemId) {
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
function addToCart(itemId = null) {
    if (!user.isLoggedIn) {
        alert('Please login to add items to your cart');
        return;
    }
    
    const itemToAdd = itemId ? clothingItems.find(i => i.id === itemId) : currentProduct;
    if (!itemToAdd) return;
    
    // Check if size is selected (for items with sizes)
    if (itemToAdd.sizes.length > 1 && !selectedSize && !itemId) {
        alert('Please select a size before adding to cart');
        return;
    }
    
    const existingItem = user.cart.find(item => 
        item.id === itemToAdd.id && (!item.size || item.size === selectedSize)
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.push({
            id: itemToAdd.id,
            size: selectedSize || (itemToAdd.sizes.length === 1 ? itemToAdd.sizes[0] : null),
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
    const totalProducts = clothingItems.length;
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