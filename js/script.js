// Check if the user is logged in
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // Replace "Login" with "My Account"
    const loginDiv = document.querySelector('.login');
    loginDiv.innerHTML = `
        <span>My Account</span>
        <i class="fas fa-user"></i>
    `;
    loginDiv.style.cursor = 'pointer';

    // Add click event to toggle sidebar
    loginDiv.addEventListener('click', function () {
        // Toggle sidebar open/close
        const sidebar = document.getElementById('sidebar');
        const sidebarOpen = sidebar.classList.contains('open');
        
        if (sidebarOpen) {
            // If sidebar is open, close it
            sidebar.classList.remove('open');
            document.body.classList.remove('sidebar-open'); // Revert body background color to default
        } else {
            // If sidebar is closed, open it
            sidebar.classList.add('open');
            document.body.classList.add('sidebar-open'); // Change body background to cream
        }

        // Display user info in sidebar when it's open
        if (!sidebarOpen) {
            document.getElementById('sidebar-name').textContent = `Name: ${user.email}`;
            document.getElementById('sidebar-email').textContent = `Email: ${user.email}`;
        }
    });

    // Handle logout
    document.getElementById('logout-btn').addEventListener('click', function () {
        // Clear user details from localStorage
        localStorage.removeItem('user');
        // Redirect to index.html (this reloads the page with the login button)
        window.location.href = 'index.html';
    });
} else {
    // Redirect to login.html if not logged in
    const loginDiv = document.querySelector('.login');
    loginDiv.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.querySelector('.sidebar-content');
    const loginDiv = document.querySelector('.login');

    // Check if the click is outside the sidebar or the login section
    if (!sidebar.contains(event.target) && !loginDiv.contains(event.target)) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open'); // Revert body background color to default
    }
});

// image slider

document.addEventListener("DOMContentLoaded", function() {
    const promoBanner = document.querySelector(".promo-banner");
    const images = [
        "https://www.reliancedigital.in/medias/LA-Banner-Hybris-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzQ1NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGJiL2hhYy8xMDIzODI3NDg5NTkwMi5qcGd8OWMxZjJiNDIxNjUxZGQ2NzZhZGExZmVhYjFhMTZjNGU3ZjZmZmE3YmUwMGE3ZDhjYmZkMTc3OTYyYWZlZDMwYg",
        "https://www.reliancedigital.in/medias/v1-Apple-AirPods-Banner-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIzL2gzZi8xMDIyODMxODQzNzQwNi5qcGd8ZjRiYzgxYzc5MDQzN2VjMzRlZWY4OTdiNWZlYmMzYjgxZWIyOGZjNWMyNzM3MDA4NmY4MjYxYjFhZDM1MDJlYg",
        "https://www.reliancedigital.in/medias/Apple-Watch-Series10-1365x260-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ2MzB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY0L2gxMi8xMDIxOTg3Nzc2MTA1NC5qcGd8MWY4MTc4NmExNTRiYWQzZDMwNWRiNGRmZDQ0ZDRiMjU1NDJhMzJhODA5ZTAyNzFmMzc5ZThmODgyMjU3NjBiZQ",
        "https://www.reliancedigital.in/medias/K12X-Banner-Banner-Hybris-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNDM4MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDY4L2hlNi8xMDI0MDExMjUyNTM0Mi5qcGd8OGMyOTg1MTFlOTgxOTE3NjQxYjhiNDA2Mjc5NjEzNDRiYTVmMWMyODJiNGY3ZDhjYzA5ZjVmMjYzYTM3NDQ2ZQ"
    ];

    // Dynamically add images to the promo banner
    images.forEach(imageSrc => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        promoBanner.appendChild(imgElement);
    });

    let currentIndex = 0;

    // Function to move to the next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        promoBanner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Function to move to the previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
        promoBanner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set up the automatic image slider
    setInterval(showNextImage, 3000); // Change image every 3 seconds

    // Add event listeners for manual navigation
    document.querySelector(".prev-btn").addEventListener("click", showPrevImage);
    document.querySelector(".next-btn").addEventListener("click", showNextImage);
});


// new
// Function to add an item to the wishlist
function addToWishlist(name, price, image) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push({ name, price, image });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${name} added to your wishlist!`);
}

// Function to add an item to the cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to your cart!`);
}
