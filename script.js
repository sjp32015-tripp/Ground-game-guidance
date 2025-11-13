// Form Submission Handler
function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const interested = document.getElementById('interested').value;
  const message = document.getElementById('message').value;
  
  // Validate form
  if (!name || !email || !interested || !message) {
    alert('Please fill out all fields');
    return;
  }
  
  // Show success message
  alert(`Thank you, ${name}! We received your message and will be in touch soon.`);
  
  // Reset form
  document.querySelector('.contact-form').reset();
  
  console.log('Form submitted:', {
    name,
    email,
    interested,
    message,
    timestamp: new Date().toISOString()
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe service cards and founder cards
document.querySelectorAll('.service-card, .founder-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Ground Game Guidance website loaded successfully');
});

// Prevent console errors in production
window.addEventListener('error', function(e) {
  console.error('Error:', e.error);
});
