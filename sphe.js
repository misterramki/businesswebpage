// Initialize AOS (Scroll Animations)
AOS.init({
  duration: 800,
  once: true,
  offset: 60
});

// Contact Form Handling
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    feedback.innerHTML = '<span style="color: #fbbf24;">⚠️ Please fill all required fields.</span>';
    return;
  }
  
  if (!email.includes('@')) {
    feedback.innerHTML = '<span style="color: #fbbf24;">⚠️ Valid email required.</span>';
    return;
  }
  
  feedback.innerHTML = '<span style="color: #8b5cf6;">✅ Thanks ' + name + '! Our team will reach out soon.</span>';
  form.reset();
  
  setTimeout(() => {
    feedback.innerHTML = '';
  }, 5000);
});

// Product Buttons Handler
document.querySelectorAll('.product-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('📞 Call +91 94443 51223 for bulk orders & best prices!');
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = this.getAttribute('href');
    if (target && target !== "#") {
      const element = document.querySelector(target);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});