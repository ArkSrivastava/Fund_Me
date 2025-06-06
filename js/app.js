// Main Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Load featured projects
    loadFeaturedProjects();
    
    // Setup event listeners
    setupEventListeners();
});

// Initialize the application
function initApp() {
    console.log('Crowdfunding application initialized');
    
    // Check if user is logged in
    checkAuthStatus();
    
    // Initialize mobile menu
    initMobileMenu();
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    hamburger.addEventListener('click', function() {
        // Toggle mobile menu
        navLinks.classList.toggle('mobile-nav-active');
        authButtons.classList.toggle('mobile-nav-active');
        
        // Animate hamburger icon
        this.classList.toggle('active');
    });
}

// Setup all event listeners
function setupEventListeners() {
    // Modal event listeners
    setupModalListeners();
    
    // Form submission listeners
    setupFormListeners();
    
    // Navigation listeners
    setupNavigationListeners();
}

// Setup modal related event listeners
function setupModalListeners() {
    // Login button
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    
    // Signup button
    const signupBtn = document.getElementById('signup-btn');
    const signupModal = document.getElementById('signup-modal');
    
    // Create project button
    const startProjectBtn = document.getElementById('start-project-btn');
    const createProjectModal = document.getElementById('create-project-modal');
    
    // Close modal buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Switch between login and signup
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    
    // Open login modal
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
    }
    
    // Open signup modal
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            signupModal.style.display = 'block';
        });
    }
    
    // Open create project modal
    if (startProjectBtn) {
        startProjectBtn.addEventListener('click', function() {
            // Check if user is logged in
            if (isUserLoggedIn()) {
                createProjectModal.style.display = 'block';
            } else {
                // Show login modal if not logged in
                loginModal.style.display = 'block';
                alert('Please log in to create a project');
            }
        });
    }
    
    // Close modals when clicking the X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Switch to signup from login
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    }
    
    // Switch to login from signup
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }
}

// Setup form submission listeners
function setupFormListeners() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
    
    // Signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignup();
        });
    }
    
    // Create project form
    const createProjectForm = document.getElementById('create-project-form');
    if (createProjectForm) {
        createProjectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleCreateProject();
        });
    }
    
    // Contribution form
    const contributionForm = document.getElementById('contribution-form');
    if (contributionForm) {
        contributionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContribution();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
            this.reset();
        });
    }
}

// Setup navigation listeners
function setupNavigationListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero section buttons
    const exploreProjectsBtn = document.querySelector('.hero-buttons .btn-primary');
    if (exploreProjectsBtn) {
        exploreProjectsBtn.addEventListener('click', function() {
            const discoverSection = document.getElementById('discover');
            if (discoverSection) {
                window.scrollTo({
                    top: discoverSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    const startFundingBtn = document.querySelector('.hero-buttons .btn-outline');
    if (startFundingBtn) {
        startFundingBtn.addEventListener('click', function() {
            if (isUserLoggedIn()) {
                // If user is logged in, scroll to projects
                const discoverSection = document.getElementById('discover');
                if (discoverSection) {
                    window.scrollTo({
                        top: discoverSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            } else {
                // If not logged in, show login modal
                document.getElementById('login-modal').style.display = 'block';
            }
        });
    }
    
    // View more projects button
    const viewMoreBtn = document.querySelector('.view-more .btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // In a real app, this would load more projects
            alert('This would load more projects from the server.');
        });
    }
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent;
            alert(`You selected the ${category} category. This would filter projects.`);
            // In a real app, this would filter projects by category
        });
    });
}

// Check if user is logged in
function isUserLoggedIn() {
    // In a real app, this would check session/local storage or cookies
    return localStorage.getItem('user') !== null;
}

// Update UI based on authentication status
function updateUIForAuthStatus(isLoggedIn) {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (isLoggedIn) {
        // User is logged in
        if (authButtons) {
            // Clear existing buttons
            authButtons.innerHTML = '';
            
            // Create user menu
            const userMenu = document.createElement('div');
            userMenu.className = 'user-menu';
            
            // Get user data
            const userData = JSON.parse(localStorage.getItem('user'));
            
            // Create user button
            const userBtn = document.createElement('button');
            userBtn.className = 'btn btn-outline';
            userBtn.innerHTML = `<i class="fas fa-user"></i> ${userData.name.split(' ')[0]}`;
            
            // Create logout button
            const logoutBtn = document.createElement('button');
            logoutBtn.className = 'btn btn-outline';
            logoutBtn.innerHTML = 'Logout';
            logoutBtn.addEventListener('click', handleLogout);
            
            // Add buttons to menu
            userMenu.appendChild(userBtn);
            userMenu.appendChild(logoutBtn);
            
            // Add menu to auth buttons
            authButtons.appendChild(userMenu);
        }
    } else {
        // User is not logged in
        if (authButtons) {
            authButtons.innerHTML = `
                <button id="login-btn" class="btn btn-outline">Login</button>
                <button id="signup-btn" class="btn btn-primary">Sign Up</button>
            `;
            
            // Re-attach event listeners
            document.getElementById('login-btn').addEventListener('click', function() {
                document.getElementById('login-modal').style.display = 'block';
            });
            
            document.getElementById('signup-btn').addEventListener('click', function() {
                document.getElementById('signup-modal').style.display = 'block';
            });
        }
    }
}

// Load featured projects
function loadFeaturedProjects() {
    const projectsContainer = document.getElementById('featured-projects-container');
    if (!projectsContainer) return;
    
    // In a real app, this would fetch from an API
    // For now, we'll use sample data from projects.js
    if (typeof sampleProjects !== 'undefined') {
        displayProjects(sampleProjects, projectsContainer);
    }
}

// Display projects in the container
function displayProjects(projects, container) {
    // Clear container
    container.innerHTML = '';
    
    // Add projects
    projects.forEach(project => {
        // Calculate progress percentage
        const progressPercentage = (project.currentFunding / project.fundingGoal) * 100;
        
        // Create project card
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-details">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                    <div class="progress-stats">
                        <span>₹${project.currentFunding.toLocaleString()}</span>
                        <span>${progressPercentage.toFixed(0)}%</span>
                    </div>
                </div>
                <div class="project-footer">
                    <div class="days-left">
                        <i class="far fa-clock"></i>
                        <span>${project.daysLeft} days left</span>
                    </div>
                    <button class="btn btn-primary contribute-btn" data-project-id="${project.id}">Fund This Project</button>
                </div>
            </div>
        `;
        
        // Add to container
        container.appendChild(projectCard);
        
        // Add event listener to contribute button
        const contributeBtn = projectCard.querySelector('.contribute-btn');
        contributeBtn.addEventListener('click', function() {
            openContributeModal(project);
        });
    });
}

// Open contribution modal for a project
function openContributeModal(project) {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        alert('Please log in to contribute to this project');
        document.getElementById('login-modal').style.display = 'block';
        return;
    }
    
    // Set project details in the modal
    const projectDetails = document.getElementById('project-contribution-details');
    projectDetails.innerHTML = `
        <div class="contribution-project-info">
            <h3>${project.title}</h3>
            <p>Current funding: ₹${project.currentFunding.toLocaleString()} of ₹${project.fundingGoal.toLocaleString()}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(project.currentFunding / project.fundingGoal) * 100}%"></div>
            </div>
        </div>
    `;
    
    // Store project ID for form submission
    document.getElementById('contribution-form').dataset.projectId = project.id;
    
    // Show the modal
    document.getElementById('contribute-modal').style.display = 'block';
}

// Handle contribution form submission
function handleContribution() {
    const form = document.getElementById('contribution-form');
    const amount = document.getElementById('contribution-amount').value;
    const projectId = form.dataset.projectId;
    
    // In a real app, this would call the payment processing API
    // For now, we'll simulate a successful payment
    processPayment({
        amount: amount,
        projectId: projectId,
        cardNumber: document.getElementById('card-number').value,
        cardExpiry: document.getElementById('card-expiry').value,
        cardCvc: document.getElementById('card-cvc').value,
        cardName: document.getElementById('card-name').value
    });
}

// Check authentication status on page load
function checkAuthStatus() {
    const isLoggedIn = isUserLoggedIn();
    updateUIForAuthStatus(isLoggedIn);
}

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized larger
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        const authButtons = document.querySelector('.auth-buttons');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks && navLinks.classList.contains('mobile-nav-active')) {
            navLinks.classList.remove('mobile-nav-active');
            authButtons.classList.remove('mobile-nav-active');
            hamburger.classList.remove('active');
        }
    }
});

// Add CSS for mobile menu that wasn't in the original CSS file
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .mobile-nav-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--white);
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            z-index: 99;
        }
        
        .nav-links.mobile-nav-active {
            gap: 15px;
        }
        
        .auth-buttons.mobile-nav-active {
            padding-top: 15px;
            border-top: 1px solid var(--medium-gray);
            margin-top: 15px;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .user-menu {
            display: flex;
            gap: 10px;
        }
    `;
    document.head.appendChild(style);
});

// Set real hero image from Unsplash
document.addEventListener('DOMContentLoaded', function() {
    // Add preload hint for the hero image to improve loading performance
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
    document.head.appendChild(preloadLink);
    
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        // Set error handler in case the image doesn't load
        heroImg.onerror = function() {
            console.log('Hero image failed to load, falling back to placeholder');
            this.src = 'https://via.placeholder.com/600x400?text=Crowdfunding+Projects';
        };
        
        // Use a high-quality crowdfunding/startup image from Unsplash
        // This image shows people collaborating on a project, perfect for a crowdfunding platform
        heroImg.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
        
        // Add loading attribute for better performance
        heroImg.loading = 'eager';
        heroImg.decoding = 'async';
        
        // Ensure the image is responsive
        heroImg.style.width = '100%';
        heroImg.style.height = 'auto';
        heroImg.style.objectFit = 'cover';
        heroImg.style.borderRadius = '10px';
        heroImg.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        
        // Update alt text for better accessibility
        heroImg.alt = 'Team collaborating on creative projects - FundMe Crowdfunding Platform';
        
        // Add a simple fade-in effect when the image loads
        heroImg.style.opacity = '0';
        heroImg.style.transition = 'opacity 0.5s ease-in-out';
        
        heroImg.onload = function() {
            this.style.opacity = '1';
            console.log('Hero image loaded successfully');
        };
    }
});