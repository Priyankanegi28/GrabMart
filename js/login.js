document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index.html';
    }

    // DOM Elements
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toast = document.getElementById('toast');
    const googleLoginBtn = document.getElementById('google-login');
    const facebookLoginBtn = document.getElementById('facebook-login');
    const signupPassword = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('confirm-password');

    // Tab Switching
    loginTab.addEventListener('click', () => switchTab('login'));
    signupTab.addEventListener('click', () => switchTab('signup'));

    function switchTab(tab) {
        if (tab === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        } else {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        }
    }

    // Password Visibility Toggle
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Password Strength Indicator
    if (signupPassword) {
        signupPassword.addEventListener('input', updatePasswordStrength);
    }

    function updatePasswordStrength() {
        const strengthBars = document.querySelectorAll('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        const password = signupPassword.value;
        let strength = 0;
        
        // Reset
        strengthBars.forEach(bar => bar.style.backgroundColor = '#e0e0e0');
        
        // Length check
        if (password.length >= 8) strength++;
        // Contains uppercase
        if (/[A-Z]/.test(password)) strength++;
        // Contains number
        if (/\d/.test(password)) strength++;
        // Contains special char
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
        
        // Update UI
        for (let i = 0; i < strength; i++) {
            strengthBars[i].style.backgroundColor = 
                strength === 1 ? '#f56565' : 
                strength === 2 ? '#ed8936' : 
                strength === 3 ? '#ecc94b' : '#48bb78';
        }
        
        strengthText.textContent = 
            strength === 0 ? 'Password strength' : 
            strength === 1 ? 'Weak' : 
            strength === 2 ? 'Medium' : 
            strength === 3 ? 'Strong' : 'Very Strong';
    }

    // Form Validation
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('signup-email').value.trim();
        const password = signupPassword.value.trim();
        const confirmPass = confirmPassword.value.trim();
        const termsAgreement = document.getElementById('terms-agreement').checked;
        
        // Validate form
        if (!email || !password || !confirmPass) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        if (password !== confirmPass) {
            showToast('Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 8) {
            showToast('Password must be at least 8 characters', 'error');
            return;
        }
        
        if (!termsAgreement) {
            showToast('Please agree to the terms and conditions', 'error');
            return;
        }
        
        // Submit form
        try {
            const btn = this.querySelector('button[type="submit"]');
            btn.classList.add('loading');
            
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In a real app, you would make an actual API call here
            // const response = await fetch('/api/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password })
            // });
            // const data = await response.json();
            
            showToast('Account created successfully!', 'success');
            this.reset();
            switchTab('login');
        } catch (error) {
            console.error('Signup error:', error);
            showToast('Signup failed. Please try again.', 'error');
        } finally {
            const btn = this.querySelector('button[type="submit"]');
            btn.classList.remove('loading');
        }
    });

    // Login Form Submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        
        if (!email || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        try {
            const btn = this.querySelector('button[type="submit"]');
            btn.classList.add('loading');
            
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Save user data to localStorage (simulated)
            const userData = {
                email,
                name: email.split('@')[0],
                token: 'simulated-token-' + Math.random().toString(36).substring(2, 15)
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(userData));
            
            showToast('Login successful! Redirecting...', 'success');
            
            // Redirect to home page after delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } catch (error) {
            console.error('Login error:', error);
            showToast('Invalid email or password', 'error');
        } finally {
            const btn = this.querySelector('button[type="submit"]');
            btn.classList.remove('loading');
        }
    });

    // Google Login
    function onGoogleSignIn(googleUser) {
        const profile = googleUser.getBasicProfile();
        const user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            image: profile.getImageUrl(),
            token: googleUser.getAuthResponse().id_token
        };
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(user));
        showToast('Google login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    googleLoginBtn.addEventListener('click', () => {
        // In a real implementation, this would trigger the Google Sign-In flow
        showToast('Google login would be implemented here', 'success');
        
        // For demo purposes, we'll simulate a successful login
        setTimeout(() => {
            const user = {
                id: 'google-12345',
                name: 'Demo User',
                email: 'demo@example.com',
                image: 'https://i.pravatar.cc/150?img=3',
                token: 'google-simulated-token'
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(user));
            window.location.href = 'index.html';
        }, 1500);
    });

    // Facebook Login
    facebookLoginBtn.addEventListener('click', () => {
        // In a real implementation, this would trigger the Facebook Login flow
        showToast('Facebook login would be implemented here', 'success');
        
        // For demo purposes, we'll simulate a successful login
        setTimeout(() => {
            const user = {
                id: 'facebook-12345',
                name: 'Demo User',
                email: 'demo@example.com',
                image: 'https://i.pravatar.cc/150?img=5',
                token: 'facebook-simulated-token'
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(user));
            window.location.href = 'index.html';
        }, 1500);
    });

    // Helper Functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showToast(message, type = 'success') {
        toast.textContent = message;
        toast.className = 'toast show';
        toast.classList.add(type);
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
        FB.init({
            appId: 'YOUR_FACEBOOK_APP_ID',
            cookie: true,
            xfbml: true,
            version: 'v12.0'
        });
    };

    // Load Facebook SDK
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});