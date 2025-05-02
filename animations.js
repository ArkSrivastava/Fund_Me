// Animations JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();
    initHoverAnimations();
    replaceCurrencySymbols();
});

// Initialize scroll animations
function initScrollAnimations() {
    // Add the animation class to elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.section-header, .category-card, .project-card, .story-card, .how-it-works-card');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the animate class
                entry.target.classList.add('animate');
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        // Add the animated class to all elements
        element.classList.add('animated');
        // Observe the element
        observer.observe(element);
    });
}

// Initialize hover animations
function initHoverAnimations() {
    // Add hover animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // Add hover animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
}

// Replace all $ symbols with ₹ in the DOM
function replaceCurrencySymbols() {
    // Replace in text nodes
    const textNodes = getTextNodesIn(document.body);
    textNodes.forEach(node => {
        if (node.nodeValue.includes('$')) {
            node.nodeValue = node.nodeValue.replace(/\$/g, '₹');
        }
    });
    
    // Replace in input placeholders and labels
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.placeholder && input.placeholder.includes('$')) {
            input.placeholder = input.placeholder.replace(/\$/g, '₹');
        }
    });
    
    // Replace in project data
    if (typeof sampleProjects !== 'undefined') {
        // Update the display of funding amounts
        updateProjectDisplayCurrency();
    }
}

// Helper function to get all text nodes in an element
function getTextNodesIn(element) {
    const textNodes = [];
    
    function getTextNodes(node) {
        if (node.nodeType === 3) {
            // Text node
            textNodes.push(node);
        } else if (node.nodeType === 1) {
            // Element node
            const children = node.childNodes;
            for (let i = 0; i < children.length; i++) {
                getTextNodes(children[i]);
            }
        }
    }
    
    getTextNodes(element);
    return textNodes;
}

// Update project display currency
function updateProjectDisplayCurrency() {
    // Update funding display in project cards
    const fundingTexts = document.querySelectorAll('.funding-progress p');
    fundingTexts.forEach(text => {
        text.textContent = text.textContent.replace(/\$/g, '₹');
    });
    
    // Update any other currency displays
    const currencyElements = document.querySelectorAll('.currency');
    currencyElements.forEach(element => {
        element.textContent = element.textContent.replace(/\$/g, '₹');
    });
}