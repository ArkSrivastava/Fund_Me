// Payment Processing JavaScript

// Process payment for project contribution
function processPayment(paymentData) {
    // In a real app, this would integrate with a payment gateway like Stripe or PayPal
    // For demo purposes, we'll simulate payment processing
    
    console.log('Processing payment:', paymentData);
    
    // Validate payment data
    if (!validatePaymentData(paymentData)) {
        alert('Invalid payment information. Please check your details and try again.');
        return false;
    }
    
    // Simulate payment processing delay
    showPaymentProcessing();
    
    // Simulate API call to payment processor
    setTimeout(function() {
        // Update project funding
        const success = updateProjectFunding(paymentData.projectId, paymentData.amount);
        
        if (success) {
            // Close contribution modal
            document.getElementById('contribute-modal').style.display = 'none';
            
            // Reset form
            document.getElementById('contribution-form').reset();
            
            // Show success message
            alert(`Thank you for your contribution of ₹{paymentData.amount}! The project has been funded successfully.`);
            
            // Refresh featured projects to show updated funding
            loadFeaturedProjects();
        } else {
            alert('There was an error processing your payment. Please try again.');
        }
        
        hidePaymentProcessing();
    }, 2000);
    
    return true;
}

// Validate payment data
function validatePaymentData(paymentData) {
    // Check amount
    if (!paymentData.amount || isNaN(paymentData.amount) || parseFloat(paymentData.amount) <= 0) {
        return false;
    }
    
    // Check card number (basic validation)
    if (!paymentData.cardNumber || paymentData.cardNumber.replace(/\s/g, '').length !== 16) {
        return false;
    }
    
    // Check expiry date (basic format validation)
    if (!paymentData.cardExpiry || !paymentData.cardExpiry.match(/^\d{2}\/\d{2}$/)) {
        return false;
    }
    
    // Check CVC (basic validation)
    if (!paymentData.cardCvc || !paymentData.cardCvc.match(/^\d{3,4}$/)) {
        return false;
    }
    
    // Check name on card
    if (!paymentData.cardName || paymentData.cardName.trim().length < 3) {
        return false;
    }
    
    return true;
}

// Show payment processing UI
function showPaymentProcessing() {
    const form = document.getElementById('contribution-form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Disable form
    Array.from(form.elements).forEach(element => {
        element.disabled = true;
    });
    
    // Update button
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
}

// Hide payment processing UI
function hidePaymentProcessing() {
    const form = document.getElementById('contribution-form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Enable form
    Array.from(form.elements).forEach(element => {
        element.disabled = false;
    });
    
    // Update button
    submitButton.innerHTML = 'Complete Contribution';
}

// Format card number with spaces
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            // Remove non-digits
            let value = this.value.replace(/\D/g, '');
            
            // Add spaces after every 4 digits
            if (value.length > 0) {
                value = value.match(/.{1,4}/g).join(' ');
            }
            
            // Update input value
            this.value = value;
        });
    }
    
    // Format expiry date
    const cardExpiryInput = document.getElementById('card-expiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', function(e) {
            // Remove non-digits
            let value = this.value.replace(/\D/g, '');
            
            // Format as MM/YY
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            
            // Update input value
            this.value = value;
        });
    }
});

// Create a project update after successful funding (for project creators)
function createProjectUpdate(projectId, updateData) {
    // In a real app, this would send data to a server
    // For demo purposes, we'll add it to our sample project
    return addProjectUpdate(projectId, updateData);
}

// Get user's contribution history
function getUserContributions() {
    // In a real app, this would fetch from a database
    // For demo purposes, we'll return an empty array
    return [];
}

// Calculate payment processing fee (for display purposes)
function calculateProcessingFee(amount) {
    // Typical payment processing fee is around 2.9% + $0.30
    return (amount * 0.029) + 0.30;
}

// Format currency for display
function formatCurrency(amount) {
    return '₹' + parseFloat(amount).toFixed(2);
}