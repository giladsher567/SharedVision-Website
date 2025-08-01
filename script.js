document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();

  // Enhanced Scroll animations with different entrance effects
  const floatingElements = document.querySelectorAll('.floating, .floating-slow, .floating-fast');
    
  // Add random floating animation delay to create natural movement
  floatingElements.forEach(el => {
    const randomDelay = Math.random() * 2;
    el.style.animationDelay = `${randomDelay}s`;
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in', 'visible');
        
        // Add random entrance effect classes based on data attribute
        if (entry.target.dataset.entranceEffect === 'random') {
          const effects = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in'];
          const randomEffect = effects[Math.floor(Math.random() * effects.length)];
          entry.target.classList.add(randomEffect);
        }
        
        // Animate children with stagger effect if they have the class
        const staggerItems = entry.target.querySelectorAll('.stagger-item');
        if (staggerItems.length > 0) {
          staggerItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            setTimeout(() => {
              item.classList.add('animate-in', 'visible');
            }, index * 100);
          });
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  const sections = document.querySelectorAll('.animate-on-scroll');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Mobile menu toggle with animation
  const menuButton = document.querySelector('header button');
  const nav = document.querySelector('header nav');
  if (menuButton && nav) {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav fixed inset-0 bg-space-deep z-40 flex flex-col items-center justify-center transform translate-x-full transition-transform duration-300';
    
    // Clone the navigation links
    const navClone = nav.cloneNode(true);
    navClone.className = 'flex flex-col items-center gap-y-8 text-xl';
    mobileNav.appendChild(navClone);
    
    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-6 right-6 text-white';
    closeButton.innerHTML = '<i data-lucide="x" class="w-8 h-8"></i>';
    mobileNav.appendChild(closeButton);
    
    // Add CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = 'contact.html#booking-section';
    ctaButton.className = 'btn btn-primary mt-8';
    ctaButton.textContent = 'קבע פגישה';
    mobileNav.appendChild(ctaButton);
    
    document.body.appendChild(mobileNav);
    lucide.createIcons({
      attrs: {
        class: ['mobile-nav-icon']
      }
    });
    
    // Toggle mobile menu
    menuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('translate-x-full');
      document.body.classList.toggle('overflow-hidden');
      
      // Add animation to menu items when opened
      if (!mobileNav.classList.contains('translate-x-full')) {
        const menuItems = navClone.querySelectorAll('a');
        menuItems.forEach((item, index) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          item.style.transitionDelay = `${index * 0.1}s`;
          
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        });
      }
    });
    
    closeButton.addEventListener('click', () => {
      mobileNav.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    });
    
    // Close mobile menu when clicking on a link
    navClone.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
  
  // Custom cursor effect
  const createCustomCursor = () => {
    // Only create on desktop devices
    if (window.innerWidth < 1024) return;
    
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });
    
    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .solution-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-expanded');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-expanded');
      });
    });
  };
  
  // Initialize custom cursor
  createCustomCursor();
  
  // Floating CTA button
  const createFloatingCTA = () => {
    const floatingCTA = document.createElement('a');
    floatingCTA.href = 'contact.html#booking-section';
    floatingCTA.className = 'fixed bottom-6 left-6 z-30 btn btn-primary shadow-lg opacity-0 translate-y-10 transition-all duration-300';
    floatingCTA.innerHTML = '<span class="flex items-center gap-2"><i data-lucide="calendar" class="w-5 h-5"></i>קבע ייעוץ חינם</span>';
    document.body.appendChild(floatingCTA);
    lucide.createIcons();
    
    // Show floating CTA after scrolling down
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;
      const isScrolledEnough = scrollTop > window.innerHeight / 2;
      
      if (isScrolledEnough && isScrollingDown) {
        floatingCTA.classList.remove('opacity-0', 'translate-y-10');
      } else if (!isScrolledEnough || !isScrollingDown) {
        floatingCTA.classList.add('opacity-0', 'translate-y-10');
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  };
  
  // Only create floating CTA on pages other than contact.html
  if (!window.location.pathname.includes('contact.html')) {
    createFloatingCTA();
  }
});
