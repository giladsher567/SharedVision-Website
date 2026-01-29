document.addEventListener('DOMContentLoaded', function () {
  // Initialize Lucide icons
  lucide.createIcons();

  // -----------------------------
  // Language-aware routing helpers
  // -----------------------------
  const isEN = window.location.pathname.startsWith('/en/');
  const langPrefix = isEN ? '/en' : '';

  function isExternalHref(href) {
    return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
  }

  function normalizeInternalHref(href) {
    if (!href) return href;

    // Leave external / mailto / tel untouched
    if (isExternalHref(href)) return href;

    // Hash-only links stay hash-only
    if (href.startsWith('#')) return href;

    // Already has /en/ and we're EN -> keep
    if (isEN && href.startsWith('/en/')) return href;

    // Absolute path like "/services.html"
    if (href.startsWith('/')) {
      // If we're EN, prefix with /en unless it's already /en
      return isEN ? `${langPrefix}${href}` : href;
    }

    // Relative like "services.html" or "contact.html#x"
    // If EN, convert to "/en/<relative>"
    return isEN ? `${langPrefix}/${href.replace(/^\.?\//, '')}` : href;
  }

  // Enhanced Scroll animations with different entrance effects
  const floatingElements = document.querySelectorAll('.floating, .floating-slow, .floating-fast');

  // Add random floating animation delay to create natural movement
  floatingElements.forEach((el) => {
    const randomDelay = Math.random() * 2;
    el.style.animationDelay = `${randomDelay}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
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
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );

  const sections = document.querySelectorAll('.animate-on-scroll');
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Mobile menu toggle with animation
  const menuButton = document.querySelector('header button');
  const nav = document.querySelector('header nav');
  if (menuButton && nav) {
    const mobileNav = document.createElement('div');
    mobileNav.className =
      'mobile-nav fixed inset-0 bg-space-deep z-40 flex flex-col items-center justify-center transform translate-x-full transition-transform duration-300';

    // Clone the navigation links
    const navClone = nav.cloneNode(true);
    navClone.className = 'flex flex-col items-center gap-y-8 text-xl';
    mobileNav.appendChild(navClone);

    // Make cloned nav links language-aware (EN stays in /en)
    navClone.querySelectorAll('a').forEach((a) => {
      const href = a.getAttribute('href');
      a.setAttribute('href', normalizeInternalHref(href));
    });

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-6 right-6 text-white';
    closeButton.innerHTML = '<i data-lucide="x" class="w-8 h-8"></i>';
    mobileNav.appendChild(closeButton);

    // Add CTA button (language-aware)
    const ctaButton = document.createElement('a');
    ctaButton.href = normalizeInternalHref('contact.html#booking-section');
    ctaButton.className = 'btn btn-primary mt-8';
    ctaButton.textContent = isEN ? 'Book a call' : 'קבע פגישה';
    mobileNav.appendChild(ctaButton);

    document.body.appendChild(mobileNav);
    lucide.createIcons({
      attrs: {
        class: ['mobile-nav-icon'],
      },
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
    navClone.querySelectorAll('a').forEach((link) => {
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
    interactiveElements.forEach((el) => {
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
    floatingCTA.href = normalizeInternalHref('contact.html#booking-section');
    floatingCTA.className =
      'fixed bottom-6 left-6 z-30 btn btn-primary shadow-lg opacity-0 translate-y-10 transition-all duration-300';
    floatingCTA.innerHTML = `<span class="flex items-center gap-2"><i data-lucide="calendar" class="w-5 h-5"></i>${isEN ? 'Book a free consult' : 'קבע ייעוץ חינם'
      }</span>`;
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

  // Only create floating CTA on pages other than contact.html (works for /en/contact.html too)
  if (!window.location.pathname.includes('contact.html')) {
    createFloatingCTA();
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      // Set loading state
      submitButton.disabled = true;
      submitButton.innerHTML = isEN
        ? '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>'
        : '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>';
      lucide.createIcons();

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          // Success
          contactForm.reset();
          contactForm.classList.add('hidden');
          if (successMessage) {
            successMessage.classList.remove('hidden');
            // Re-initialize icons for the success message
            lucide.createIcons();
          }
        } else {
          // Error
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            alert(data['errors'].map((error) => error['message']).join(', '));
          } else {
            alert(isEN ? 'There was an error sending the form. Please try again later.' : 'אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.');
          }
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      } catch (error) {
        console.error('Error:', error);
        alert(isEN ? 'There was an error sending the form. Please try again later.' : 'אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.');
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
