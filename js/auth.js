// Authentication JavaScript

// Handle login form submission
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Validate form data
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, this would send a request to a server
    // For demo purposes, we'll simulate authentication
    simulateLogin(email, password);
}

// Handle signup form submission
function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Validate form data
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // In a real app, this would send a request to a server
    // For demo purposes, we'll simulate registration
    simulateSignup(name, email, password);
}

// Handle logout
function handleLogout() {
    // Clear user data from local storage
    localStorage.removeItem('user');
    
    // Update UI
    updateUIForAuthStatus(false);
    
    // Show message
    alert('You have been logged out successfully');
}

// Simulate login (for demo purposes)
function simulateLogin(email, password) {
    // In a real app, this would validate credentials against a database
    // For demo purposes, we'll accept any valid-looking email and password
    if (email.includes('@') && password.length >= 6) {
        // Create a user object
        const user = {
            id: generateUserId(),
            name: email.split('@')[0], // Use part of email as name
            email: email
        };
        
        // Store user in local storage
        localStorage.setItem('user', JSON.stringify(user));
        
        // Close login modal
        document.getElementById('login-modal').style.display = 'none';
        
        // Update UI
        updateUIForAuthStatus(true);
        
        // Show success message
        alert('You have been logged in successfully');
    } else {
        alert('Invalid email or password');
    }
}

// Simulate signup (for demo purposes)
function simulateSignup(name, email, password) {
    // In a real app, this would create a new user in the database
    // For demo purposes, we'll accept any valid-looking data
    if (email.includes('@') && password.length >= 6) {
        // Create a user object
        const user = {
            id: generateUserId(),
            name: name,
            email: email
        };
        
        // Store user in local storage
        localStorage.setItem('user', JSON.stringify(user));
        
        // Close signup modal
        document.getElementById('signup-modal').style.display = 'none';
        
        // Update UI
        updateUIForAuthStatus(true);
        
        // Show success message
        alert(`Welcome, ${name}! Your account has been created successfully.`);
    } else {
        alert('Invalid email or password. Password must be at least 6 characters.');
    }
}

// Generate a random user ID (for demo purposes)
function generateUserId() {
    return Math.floor(Math.random() * 1000) + 1000;
}

// Check if email is already registered (for demo purposes)
function isEmailRegistered(email) {
    // In a real app, this would check against a database
    // For demo purposes, we'll always return false
    return false;
}

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('user') !== null;
    updateUIForAuthStatus(isLoggedIn);
});