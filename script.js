document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('main'); 

    function setMainMargin() {
        if (header && mainContent) {
            const headerHeight = header.offsetHeight;
            mainContent.style.marginTop = `${headerHeight}px`;
        }
    }
    
    setMainMargin();
    window.addEventListener('resize', setMainMargin);

    function handleScroll() {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stagger animations for children of a common parent if needed
                if (entry.target.parentElement.classList.contains('hero-cards') || 
                    entry.target.parentElement.classList.contains('breeds-grid') ||
                    entry.target.parentElement.classList.contains('features')) {
                    const children = Array.from(entry.target.parentElement.children);
                    const index = children.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
                observer.unobserve(entry.target); 
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // Cookie Consent System
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');

    // Check if user has already made a choice
    function checkCookieConsent() {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            showCookieBanner();
        }
    }

    function showCookieBanner() {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1500); // Show after 1.5 seconds
    }

    function hideCookieBanner() {
        cookieBanner.classList.remove('show');
    }

    function setCookieConsent(accepted) {
        localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        
        if (accepted) {
            // Enable analytics, tracking, etc. here
            console.log('Cookies accepted - analytics enabled');
        } else {
            // Disable or remove tracking cookies
            console.log('Cookies declined - analytics disabled');
        }
        
        hideCookieBanner();
    }

    // Event listeners for cookie buttons
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            setCookieConsent(true);
        });
    }

    if (cookieDecline) {
        cookieDecline.addEventListener('click', () => {
            setCookieConsent(false);
        });
    }

    // Initialize cookie consent check
    checkCookieConsent();

    // Close banner with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cookieBanner.classList.contains('show')) {
            setCookieConsent(false);
        }
    });
});