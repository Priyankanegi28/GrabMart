// Show Signup form and hide Login form when "Sign up" link is clicked
document.getElementById('show-signup').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

// Show Login form and hide Signup form when "Login" link is clicked
document.getElementById('show-login').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Signup form submission
document.getElementById('signup-form-content').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    // Check if the fields are empty
    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    try {
        const response = await fetch('https://beneficial-jumbled-patient.glitch.me/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        
        // Check if the response is ok and handle accordingly
        if (response.ok) {
            // Show success message at the top middle
            document.getElementById('signup-success-message').style.display = 'block';
            
            // Hide the signup form and show the login form
            setTimeout(() => {
                document.getElementById('signup-form').style.display = 'none';
                document.getElementById('login-form').style.display = 'block';
            }, 1500); // Delay for 1.5 seconds to show success message
            
            // Hide the success message after 3 seconds
            setTimeout(() => {
                document.getElementById('signup-success-message').style.display = 'none';
            }, 3000); // Hide after 3 seconds
            
        } else {
            // If there's an issue with the signup process
            console.log('Error response:', data);
            alert(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        // Log the error and alert the user
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again later.');
    }
});

// Login form submission
document.getElementById('login-form-content').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    try {
        const response = await fetch('https://beneficial-jumbled-patient.glitch.me/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Show login success message
            document.getElementById('login-success-message').style.display = 'block';

            // Save user details in localStorage
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to index.html after 2 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500); // Delay before redirecting

            // Hide the login success message after 3 seconds
            setTimeout(() => {
                document.getElementById('login-success-message').style.display = 'none';
            }, 1000); // Hide after 3 seconds
        } else {
            alert(data.message || 'Invalid email or password.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
});

// Go to login form after signup success
document.getElementById('go-to-login').addEventListener('click', function () {
    document.getElementById('signup-success').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});
