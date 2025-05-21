// DOM Elements
const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('search-bar');
const brandFilter = document.getElementById('brand-filter');
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

// Mobile products data
const mobileProducts = [
    {
        id: 19,
        name: 'iPhone 15 Pro Max',
        brand: 'apple',
        price: 129999,
        originalPrice: 139999,
        images: [
            'https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg',
            'https://m.media-amazon.com/images/I/71T5NVOgbpL._SL1500_.jpg'
        ],
        specs: {
            'Display': '6.7-inch Super Retina XDR OLED, 120Hz ProMotion',
            'Processor': 'A17 Pro chip (3nm)',
            'RAM': '8GB',
            'Storage': '256GB/512GB/1TB',
            'Rear Camera': '48MP main + 12MP ultra-wide + 12MP telephoto (5x optical zoom)',
            'Front Camera': '12MP TrueDepth',
            'Battery': '4422 mAh, up to 29 hours video playback',
            'OS': 'iOS 17',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, MagSafe, Qi wireless',
            'Dimensions': '159.9 x 76.7 x 8.3 mm',
            'Weight': '221g'
        },
        rating: 4.8,
        reviews: 1245
    },
    {
        id: 1,
        name: 'Samsung Galaxy S23',
        brand: 'samsung',
        price: 78999,
        originalPrice: 78999,
        images: [
            'https://rukminim2.flixcart.com/image/720/864/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=60&crop=false',
            'https://static.digit.in/default/samsung-galaxy-s23-e71191c458.jpeg'
        ],
        specs: {
            'Display': '6.1-inch Dynamic AMOLED 2X, 120Hz',
            'Processor': 'Qualcomm Snapdragon 8 Gen 2',
            'RAM': '8GB',
            'Storage': '128GB/256GB',
            'Rear Camera': '50MP main + 12MP ultra-wide + 10MP telephoto (3x optical zoom)',
            'Front Camera': '12MP',
            'Battery': '3900 mAh, 25W fast charging',
            'OS': 'Android 13 (One UI 5.1)',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, Wireless PowerShare',
            'Dimensions': '146.3 x 70.9 x 7.6 mm',
            'Weight': '168g'
        },
        rating: 4.7,
        reviews: 980
    },
    {
        id: 2,
        name: 'SAMSUNG Galaxy S24 Ultra 5G',
        brand: 'samsung',
        price: 100500,
        originalPrice: 100500,
        images: [
            'https://media.croma.com/image/upload/v1705640168/Croma%20Assets/Communication/Mobiles/Images/303819_evgjjv.png'
        ],
        specs: {
            'Display': '6.8-inch Dynamic AMOLED 2X, 120Hz LTPO',
            'Processor': 'Qualcomm Snapdragon 8 Gen 3',
            'RAM': '12GB',
            'Storage': '256GB/512GB/1TB',
            'Rear Camera': '200MP main + 12MP ultra-wide + 50MP telephoto (5x) + 10MP telephoto (3x)',
            'Front Camera': '12MP',
            'Battery': '5000 mAh, 45W fast charging',
            'OS': 'Android 14 (One UI 6.1)',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, Wireless PowerShare',
            'S Pen': 'Yes, built-in',
            'Dimensions': '162.3 x 79 x 8.6 mm',
            'Weight': '232g'
        },
        rating: 4.9,
        reviews: 1500
    },
    {
        id: 3,
        name: 'Samsung Galaxy F15 5G',
        brand: 'samsung',
        price: 94999,
        originalPrice: 94999,
        images: [
            'https://media.croma.com/image/upload/v1717069529/Croma%20Assets/Communication/Mobiles/Images/305369_0_ehvjig.png'
        ],
        specs: {
            'Display': '6.5-inch Super AMOLED, 90Hz',
            'Processor': 'MediaTek Dimensity 6100+',
            'RAM': '6GB/8GB',
            'Storage': '128GB (expandable up to 1TB)',
            'Rear Camera': '50MP main + 5MP ultra-wide + 2MP macro',
            'Front Camera': '13MP',
            'Battery': '6000 mAh, 25W fast charging',
            'OS': 'Android 14 (One UI 6)',
            '5G': 'Yes',
            'Security': 'Side-mounted fingerprint sensor',
            'Charging': 'USB-C',
            'Dimensions': '160.1 x 76.8 x 9.3 mm',
            'Weight': '217g'
        },
        rating: 4.3,
        reviews: 420
    },
    {
        id: 4,
        name: 'Samsung Galaxy A34 5G',
        brand: 'samsung',
        price: 67000,
        originalPrice: 67000,
        images: [
            'https://www.jiomart.com/images/product/original/493665842/samsung-galaxy-a34-5g-256-gb-8-gb-ram-awesome-violet-mobile-phone-digital-o493665842-p599805256-6-202303241924.jpeg?im=Resize=(420,420)'
        ],
        specs: {
            'Display': '6.6-inch Super AMOLED, 120Hz',
            'Processor': 'MediaTek Dimensity 1080',
            'RAM': '8GB',
            'Storage': '128GB/256GB (expandable)',
            'Rear Camera': '48MP OIS + 8MP ultra-wide + 5MP macro',
            'Front Camera': '13MP',
            'Battery': '5000 mAh, 25W charging',
            'OS': 'Android 13 (One UI 5.1)',
            '5G': 'Yes',
            'Water Resistance': 'IP67',
            'Security': 'Under-display optical fingerprint',
            'Dimensions': '161.3 x 78.1 x 8.2 mm',
            'Weight': '199g'
        },
        rating: 4.5,
        reviews: 750
    },
    {
        id: 5,
        name: 'Redmi 12',
        brand: 'redmi',
        price: 10000,
        originalPrice: 10000,
        images: [
            'https://i.gadgets360cdn.com/products/large/redmi-12-db-709x800-1686893414.jpg',
            'https://www.gloo.com.my/image/cache/catalog/Images/Smartphone/PHOXIAM1382BLK_T1-1000x1000.jpg'
        ],
        specs: {
            'Display': '6.79-inch FHD+ IPS LCD, 90Hz',
            'Processor': 'MediaTek Helio G88',
            'RAM': '4GB/6GB/8GB',
            'Storage': '128GB (expandable)',
            'Rear Camera': '50MP + 8MP ultra-wide + 2MP macro',
            'Front Camera': '8MP',
            'Battery': '5000 mAh, 18W charging',
            'OS': 'Android 13 (MIUI 14)',
            '5G': 'No (4G LTE)',
            'Security': 'Side-mounted fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '168.6 x 76.3 x 8.2 mm',
            'Weight': '198.5g'
        },
        rating: 4.2,
        reviews: 850
    },
    {
        id: 6,
        name: 'REDMI Note 13 Pro 5G',
        brand: 'redmi',
        price: 15500,
        originalPrice: 15500,
        images: [
            'https://infiswap.com/wp-content/uploads/2024/06/infi267-1-1.jpg'
        ],
        specs: {
            'Display': '6.67-inch 1.5K AMOLED, 120Hz',
            'Processor': 'Qualcomm Snapdragon 7s Gen 2',
            'RAM': '8GB/12GB',
            'Storage': '128GB/256GB/512GB',
            'Rear Camera': '200MP OIS + 8MP ultra-wide + 2MP macro',
            'Front Camera': '16MP',
            'Battery': '5100 mAh, 67W fast charging',
            'OS': 'Android 13 (HyperOS)',
            '5G': 'Yes',
            'Security': 'Under-display fingerprint',
            'Charging': 'USB-C',
            'Water Resistance': 'IP54',
            'Dimensions': '161.1 x 75 x 8 mm',
            'Weight': '187g'
        },
        rating: 4.6,
        reviews: 1200
    },
    {
        id: 7,
        name: 'Redmi 10X',
        brand: 'redmi',
        price: 11599,
        originalPrice: 11599,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgp9ZSuhI-fSxwYREak3Xe2054x4i1opUYg&s'
        ],
        specs: {
            'Display': '6.53-inch FHD+ AMOLED',
            'Processor': 'MediaTek Helio G85',
            'RAM': '4GB/6GB',
            'Storage': '64GB/128GB (expandable)',
            'Rear Camera': '48MP + 8MP ultra-wide + 2MP macro + 2MP depth',
            'Front Camera': '13MP',
            'Battery': '5020 mAh, 18W charging',
            'OS': 'Android 10 (MIUI 12)',
            '5G': 'No (4G LTE)',
            'Security': 'Side-mounted fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '162.3 x 77.2 x 8.9 mm',
            'Weight': '205g'
        },
        rating: 4.0,
        reviews: 620
    },
    {
        id: 8,
        name: 'Redmi Note 10',
        brand: 'redmi',
        price: 10000,
        originalPrice: 10000,
        images: [
            'https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png'
        ],
        specs: {
            'Display': '6.43-inch FHD+ AMOLED, 60Hz',
            'Processor': 'Qualcomm Snapdragon 678',
            'RAM': '4GB/6GB',
            'Storage': '64GB/128GB (expandable)',
            'Rear Camera': '48MP + 8MP ultra-wide + 2MP macro + 2MP depth',
            'Front Camera': '13MP',
            'Battery': '5000 mAh, 33W fast charging',
            'OS': 'Android 11 (MIUI 12)',
            '5G': 'No (4G LTE)',
            'Security': 'Side-mounted fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '160.5 x 74.5 x 8.3 mm',
            'Weight': '178.8g'
        },
        rating: 4.1,
        reviews: 950
    },
    {
        id: 9,
        name: 'Apple iPhone 16',
        brand: 'apple',
        price: 85000,
        originalPrice: 85000,
        images: [
            'https://inventstore.in/wp-content/uploads/2024/07/63.webp'
        ],
        specs: {
            'Display': '6.1-inch Super Retina XDR OLED, 60Hz',
            'Processor': 'A18 Bionic (3nm)',
            'RAM': '6GB',
            'Storage': '128GB/256GB/512GB',
            'Rear Camera': '48MP main + 12MP ultra-wide',
            'Front Camera': '12MP TrueDepth',
            'Battery': 'Up to 20 hours video playback',
            'OS': 'iOS 18',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, MagSafe, Qi wireless',
            'Dimensions': '146.7 x 71.6 x 7.8 mm',
            'Weight': '173g'
        },
        rating: 4.7,
        reviews: 1800
    },
    {
        id: 10,
        name: 'Apple iPhone 15',
        brand: 'apple',
        price: 74900,
        originalPrice: 74900,
        images: [
            'https://inventstore.in/wp-content/uploads/2023/09/1-2.webp'
        ],
        specs: {
            'Display': '6.1-inch Super Retina XDR OLED, 60Hz',
            'Processor': 'A16 Bionic (4nm)',
            'RAM': '6GB',
            'Storage': '128GB/256GB/512GB',
            'Rear Camera': '48MP main + 12MP ultra-wide',
            'Front Camera': '12MP TrueDepth',
            'Battery': 'Up to 20 hours video playback',
            'OS': 'iOS 17',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, MagSafe, Qi wireless',
            'Dimensions': '147.6 x 71.6 x 7.8 mm',
            'Weight': '171g'
        },
        rating: 4.6,
        reviews: 2500
    },
    {
        id: 11,
        name: 'Apple iPhone 15 Pro Max',
        brand: 'apple',
        price: 95000,
        originalPrice: 95000,
        images: [
            'https://static.digit.in/default/apple-iphone-15-pro-max-1a178aef71.jpeg'
        ],
        specs: {
            'Display': '6.7-inch Super Retina XDR OLED, 120Hz ProMotion',
            'Processor': 'A17 Pro (3nm)',
            'RAM': '8GB',
            'Storage': '256GB/512GB/1TB',
            'Rear Camera': '48MP main + 12MP ultra-wide + 12MP telephoto (5x optical zoom)',
            'Front Camera': '12MP TrueDepth',
            'Battery': '4422 mAh, up to 29 hours video playback',
            'OS': 'iOS 17',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, MagSafe, Qi wireless',
            'Dimensions': '159.9 x 76.7 x 8.3 mm',
            'Weight': '221g'
        },
        rating: 4.8,
        reviews: 3200
    },
    {
        id: 12,
        name: 'Apple iPhone 13',
        brand: 'apple',
        price: 73999,
        originalPrice: 73999,
        images: [
            'https://m.media-amazon.com/images/I/61iTWldZ9qL._AC_UF1000,1000_QL80_.jpg'
        ],
        specs: {
            'Display': '6.1-inch Super Retina XDR OLED, 60Hz',
            'Processor': 'A15 Bionic (5nm)',
            'RAM': '4GB',
            'Storage': '128GB/256GB/512GB',
            'Rear Camera': '12MP main + 12MP ultra-wide',
            'Front Camera': '12MP TrueDepth',
            'Battery': 'Up to 19 hours video playback',
            'OS': 'iOS 15 (upgradable)',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'Lightning, MagSafe, Qi wireless',
            'Dimensions': '146.7 x 71.5 x 7.7 mm',
            'Weight': '174g'
        },
        rating: 4.5,
        reviews: 4500
    },
    {
        id: 13,
        name: 'Apple iPhone 16 Pro',
        brand: 'apple',
        price: 162900,
        originalPrice: 162900,
        images: [
            'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725959828/Croma%20Assets/Communication/Mobiles/Images/309739_0_gfc7sv.png'
        ],
        specs: {
            'Display': '6.3-inch Super Retina XDR OLED, 120Hz ProMotion',
            'Processor': 'A18 Pro (3nm)',
            'RAM': '8GB',
            'Storage': '256GB/512GB/1TB/2TB',
            'Rear Camera': '48MP main + 12MP ultra-wide + 12MP telephoto (5x optical zoom)',
            'Front Camera': '12MP TrueDepth',
            'Battery': 'Up to 25 hours video playback',
            'OS': 'iOS 18',
            '5G': 'Yes',
            'Water Resistance': 'IP68',
            'Charging': 'USB-C, MagSafe, Qi wireless',
            'Dimensions': '146.6 x 70.6 x 8.3 mm',
            'Weight': '187g'
        },
        rating: 4.9,
        reviews: 950
    },
    {
        id: 14,
        name: 'Realme C35',
        brand: 'realme',
        price: 16000,
        originalPrice: 16000,
        images: [
            'https://m.media-amazon.com/images/I/51Jx33Kl0FL._AC_UF1000,1000_QL80_.jpg'
        ],
        specs: {
            'Display': '6.6-inch FHD+ IPS LCD, 60Hz',
            'Processor': 'Unisoc Tiger T616',
            'RAM': '4GB/6GB',
            'Storage': '64GB/128GB (expandable)',
            'Rear Camera': '50MP + 2MP macro + 0.3MP depth',
            'Front Camera': '8MP',
            'Battery': '5000 mAh, 18W charging',
            'OS': 'Android 11 (Realme UI 2.0)',
            '5G': 'No (4G LTE)',
            'Security': 'Side-mounted fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '164.4 x 75.6 x 8.1 mm',
            'Weight': '189g'
        },
        rating: 4.0,
        reviews: 580
    },
    {
        id: 15,
        name: 'Realme C67 5G',
        brand: 'realme',
        price: 10649,
        originalPrice: 10649,
        images: [
            'https://m.media-amazon.com/images/I/61B2t2Ul9zL._AC_UF1000,1000_QL80_.jpg'
        ],
        specs: {
            'Display': '6.72-inch FHD+ IPS LCD, 120Hz',
            'Processor': 'MediaTek Dimensity 6100+',
            'RAM': '4GB/6GB',
            'Storage': '128GB (expandable)',
            'Rear Camera': '50MP + 2MP depth',
            'Front Camera': '8MP',
            'Battery': '5000 mAh, 33W fast charging',
            'OS': 'Android 13 (Realme UI 4.0)',
            '5G': 'Yes',
            'Security': 'Side-mounted fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '165.7 x 76 x 7.9 mm',
            'Weight': '190g'
        },
        rating: 4.2,
        reviews: 720
    },
    {
        id: 16,
        name: 'Realme 11 Pro 5G',
        brand: 'realme',
        price: 24999,
        originalPrice: 24999,
        images: [
            'https://sathya.in/media/90371/catalog/sunrise_beige.jpg'
        ],
        specs: {
            'Display': '6.7-inch FHD+ AMOLED, 120Hz',
            'Processor': 'MediaTek Dimensity 7050',
            'RAM': '8GB/12GB',
            'Storage': '256GB',
            'Rear Camera': '100MP OIS + 2MP depth',
            'Front Camera': '16MP',
            'Battery': '5000 mAh, 67W fast charging',
            'OS': 'Android 13 (Realme UI 4.0)',
            '5G': 'Yes',
            'Security': 'Under-display fingerprint',
            'Charging': 'USB-C',
            'Dimensions': '161.7 x 73.9 x 8.2 mm',
            'Weight': '183g'
        },
        rating: 4.4,
        reviews: 890
    },
    {
        id: 17,
        name: 'Realme C30s 32GB',
        brand: 'realme',
        price: 30000,
        originalPrice: 30000,
        images: [
            'https://centraltech.co.ke/wp-content/uploads/2023/09/Realme-C30s.jpg'
        ],
        specs: {
            'Display': '6.5-inch HD+ IPS LCD, 60Hz',
            'Processor': 'Unisoc SC9863A',
            'RAM': '2GB/3GB',
            'Storage': '32GB (expandable)',
            'Rear Camera': '8MP',
            'Front Camera': '5MP',
            'Battery': '5000 mAh, 10W charging',
            'OS': 'Android 12 (Realme UI Go Edition)',
            '5G': 'No (4G LTE)',
            'Security': 'Face unlock',
            'Charging': 'Micro USB',
            'Dimensions': '164.2 x 75.7 x 8.5 mm',
            'Weight': '186g'
        },
        rating: 3.8,
        reviews: 420
    },
    {
        id: 18,
        name: 'Realme Narzo 20',
        brand: 'realme',
        price: 10999,
        originalPrice: 10999,
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2021/3/CX/RD/SR/46278852/realme-narzo-20-a-mobile-phone-500x500.jpg'
        ],
        specs: {
            'Display': '6.5-inch HD+ IPS LCD, 60Hz',
            'Processor': 'MediaTek Helio G85',
            'RAM': '4GB/6GB',
            'Storage': '64GB/128GB (expandable)',
            'Rear Camera': '48MP + 8MP ultra-wide + 2MP macro + 2MP depth',
            'Front Camera': '8MP',
            'Battery': '6000 mAh, 18W fast charging',
            'OS': 'Android 10 (Realme UI 1.0)',
            '5G': 'No (4G LTE)',
            'Security': 'Rear fingerprint sensor',
            'Charging': 'USB-C',
            'Dimensions': '164.5 x 75.9 x 9.8 mm',
            'Weight': '208g'
        },
        rating: 4.1,
        reviews: 650
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
const productsPerPage = 20;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartWishlistCount();
    checkLoginStatus();
    
    // Event listeners
    searchBar.addEventListener('input', filterProducts);
    brandFilter.addEventListener('change', filterProducts);
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
function loadProducts(products = mobileProducts) {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }
    
    paginatedProducts.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}">
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
    const selectedBrand = brandFilter.value;
    const selectedPrice = priceFilter.value;
    
    let filteredProducts = mobileProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
        
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (selectedPrice.endsWith('+')) {
                matchesPrice = product.price >= 60000;
            } else {
                matchesPrice = product.price >= min && product.price <= max;
            }
        }
        
        return matchesSearch && matchesBrand && matchesPrice;
    });
    
    currentPage = 1;
    loadProducts(filteredProducts);
}

// Show quick view modal
function showQuickView(productId) {
    currentProduct = mobileProducts.find(product => product.id === productId);
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
    
    // Set specifications
    modalProductSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(currentProduct.specs)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${key}</span><span>${value}</span>`;
        modalProductSpecs.appendChild(li);
    }
    
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
    
    const productToToggle = productId ? mobileProducts.find(p => p.id === productId) : currentProduct;
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
    
    const productToAdd = productId ? mobileProducts.find(p => p.id === productId) : currentProduct;
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
    const totalProducts = mobileProducts.length;
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