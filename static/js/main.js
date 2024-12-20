// Navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
});

// Form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            showError(input, 'This field is required');
        } else {
            clearError(input);
        }

        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                showError(input, 'Please enter a valid email address');
            }
        }
    });

    return isValid;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    
    input.classList.add('error');
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    const error = formGroup.querySelector('.error-message');
    
    if (error) {
        error.remove();
    }
    
    input.classList.remove('error');
}

// Local Storage Management
const StorageManager = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    },
    
    clear: function() {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }
    }
};

// Cookie Management
const CookieManager = {
    set: function(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    },
    
    get: function(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },
    
    delete: function(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

// Flash Messages
function initializeFlashMessages() {
    const flashMessages = document.querySelectorAll('.flash-message');
    flashMessages.forEach(message => {
        message.classList.add('fade-in');
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initializeFlashMessages();
    
    // Add form validation to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
});
