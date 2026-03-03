document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Sticky Header Styling on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form Submission
    const estimateForm = document.getElementById('estimateForm');
    if (estimateForm) {
        estimateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation check
            const submitBtn = estimateForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission delay
            setTimeout(() => {
                alert('Thank you for your request! We will contact you shortly regarding your free estimate.');
                estimateForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxLinks = document.querySelectorAll('.lightbox-link');
    const closeBtn = document.querySelector('.lightbox-close');

    lightboxLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            const imgTitle = this.getAttribute('data-title');
            
            lightboxImg.src = imgSrc;
            lightboxCaption.innerHTML = imgTitle;
            
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});
