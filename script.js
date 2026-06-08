/**
 * LuxEstate – Premium Real Estate Website
 * script.js
 * Vanilla JS — no frameworks
 */

'use strict';

/* ============================================================
   DATA
   ============================================================ */

/** Property listings */
const PROPERTIES = [
  {
    id: 1,
    title: 'Sunset Ridge Villa',
    location: 'Beverly Hills',
    type: 'villa',
    price: 4850000,
    priceLabel: '$4,850,000',
    beds: 6,
    baths: 7,
    area: 8200,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Manhattan Sky Penthouse',
    location: 'Manhattan',
    type: 'penthouse',
    price: 12500000,
    priceLabel: '$12,500,000',
    beds: 4,
    baths: 5,
    area: 5400,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Ocean Breeze Residence',
    location: 'Miami Beach',
    type: 'mansion',
    price: 7200000,
    priceLabel: '$7,200,000',
    beds: 7,
    baths: 8,
    area: 11500,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    featured: true,
  },
  {
    id: 4,
    title: 'Pacific Cliffside Home',
    location: 'Malibu',
    type: 'villa',
    price: 9300000,
    priceLabel: '$9,300,000',
    beds: 5,
    baths: 6,
    area: 7800,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Mountain Retreat Estate',
    location: 'Aspen',
    type: 'mansion',
    price: 6400000,
    priceLabel: '$6,400,000',
    beds: 8,
    baths: 9,
    area: 14000,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Harbour View Apartment',
    location: 'Manhattan',
    type: 'apartment',
    price: 850000,
    priceLabel: '$850,000',
    beds: 2,
    baths: 2,
    area: 1400,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Hamptons Beach House',
    location: 'Hamptons',
    type: 'villa',
    price: 3750000,
    priceLabel: '$3,750,000',
    beds: 4,
    baths: 4,
    area: 4600,
    status: 'for-rent',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Downtown Luxury Townhouse',
    location: 'Beverly Hills',
    type: 'townhouse',
    price: 1850000,
    priceLabel: '$1,850,000',
    beds: 3,
    baths: 3,
    area: 2800,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    featured: false,
  },
  {
    id: 9,
    title: 'Modern Glass Villa',
    location: 'Malibu',
    type: 'villa',
    price: 5600000,
    priceLabel: '$5,600,000',
    beds: 5,
    baths: 5,
    area: 6900,
    status: 'for-sale',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    featured: false,
  },
];

/** Testimonials */
const TESTIMONIALS = [
  {
    text: 'Working with LuxEstate was an absolute dream. James Hartford found us our perfect Beverly Hills home in just three weeks. His market knowledge and patience throughout the process was remarkable. We couldn\'t be happier.',
    name: 'Catherine & David Morrison',
    role: 'Homeowners, Beverly Hills',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=100&q=80',
  },
  {
    text: 'I was skeptical about luxury real estate agents, but LuxEstate completely changed my perspective. Sophia Chen\'s attention to detail, follow-through, and negotiation skills saved us over $400K on our Manhattan penthouse purchase.',
    name: 'Robert Chen',
    role: 'Investor & Entrepreneur',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    text: 'We sold our Malibu property 20% above asking price thanks to LuxEstate\'s marketing strategy. The professional photography, virtual tours, and global buyer network they brought to the table was unmatched.',
    name: 'Sarah & Michael Thompson',
    role: 'Property Sellers, Malibu',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    text: 'Marcus Williams provided outstanding investment consultation that helped me build a portfolio of five luxury properties over two years. His ROI projections were spot on, and his market insight is truly invaluable.',
    name: 'James Whitfield',
    role: 'Real Estate Investor',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    text: 'The property management service from LuxEstate has been exceptional. My two rental properties are always occupied, well-maintained, and generating returns above market rate. Elena Russo\'s dedication is extraordinary.',
    name: 'Dr. Linda Park',
    role: 'Property Owner',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
  },
];

/** Gallery images */
const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=75',
    caption: 'Sunset Ridge Villa – Beverly Hills',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75',
    caption: 'Ocean Breeze Residence – Miami Beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=75',
    caption: 'Manhattan Sky Penthouse – New York',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75',
    caption: 'Pacific Cliffside Home – Malibu',
  },
  {
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=75',
    caption: 'Grand Foyer – Mountain Retreat Estate',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75',
    caption: 'Modern Living Room – Hamptons Beach House',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75',
    caption: 'Chef\'s Kitchen – Beverly Hills Villa',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=75',
    caption: 'Infinity Pool – Malibu Glass Villa',
  },
];

/** FAQ items */
const FAQ_ITEMS = [
  {
    question: 'How do I get started with buying a property through LuxEstate?',
    answer: 'Getting started is simple. Contact us via the form below or call our office directly. One of our agents will schedule a complimentary consultation to understand your needs, budget, and preferences. We\'ll then curate a shortlist of properties that match your criteria and arrange private viewings at your convenience.',
  },
  {
    question: 'What fees does LuxEstate charge for selling my property?',
    answer: 'Our commission structure is competitive and transparent. We charge a success-based commission on the sale price, with no hidden fees. The exact rate depends on the property value and scope of marketing services. We\'ll discuss this fully during your free consultation and provide a detailed proposal before signing any agreement.',
  },
  {
    question: 'How long does it typically take to sell a luxury property?',
    answer: 'The timeline varies based on market conditions, pricing, and location. In our experience, well-priced luxury properties in prime locations typically sell within 60–90 days. Our premium marketing — including professional photography, virtual tours, and global advertising — often accelerates this timeline significantly.',
  },
  {
    question: 'Do you help with mortgage and financing options?',
    answer: 'While we are real estate specialists rather than mortgage brokers, we work with a trusted network of luxury property lenders and financial advisors. We\'re happy to introduce you to our preferred partners who specialize in jumbo mortgages and high-value property financing.',
  },
  {
    question: 'Can LuxEstate help with international property purchases?',
    answer: 'Absolutely. We have an extensive global network of partner agencies and can assist clients in acquiring luxury properties internationally. From the initial search to closing, we coordinate every step with local experts to ensure a smooth transaction regardless of location.',
  },
  {
    question: 'What is included in your Property Management service?',
    answer: 'Our full-service property management covers tenant sourcing and screening, lease preparation, rent collection, routine maintenance coordination, 24/7 emergency response, regular property inspections, detailed monthly financial reporting, and year-end tax documentation. We handle everything so you can enjoy truly passive income.',
  },
  {
    question: 'How are your agents vetted and certified?',
    answer: 'All LuxEstate agents hold state real estate licenses and carry additional certifications in luxury home marketing. They undergo continuous training in market trends, negotiation tactics, and client service. Many of our agents are members of the Institute for Luxury Home Marketing.',
  },
];

/* ============================================================
   UTILITIES
   ============================================================ */

/**
 * Format a number as a compact price string.
 * @param {number} n
 * @returns {string}
 */
function formatPrice(n) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

/**
 * Debounce helper.
 * @param {Function} fn
 * @param {number} delay
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ============================================================
   NAVIGATION
   ============================================================ */

(function initNav() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const allNavLinks = navLinks.querySelectorAll('.nav-link');

  // Sticky header on scroll
  const handleScroll = debounce(() => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, 10);

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on nav link click
  allNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navLinks.classList.contains('open')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Active link on scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          allNavLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => sectionObserver.observe(s));
})();

/* ============================================================
   HERO
   ============================================================ */

(function initHero() {
  // Ken Burns effect
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    window.addEventListener('load', () => heroBg.classList.add('loaded'), { once: true });
  }

  // Search tabs
  const tabs = document.querySelectorAll('.search-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Hero search button → scroll to properties section with filter
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const heroSearch = document.getElementById('heroSearch');
  const heroType = document.getElementById('heroType');

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      // Mirror values to property filters if possible
      const filterType = document.getElementById('filterType');
      if (heroType && filterType && heroType.value) {
        filterType.value = heroType.value;
      }
      document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
      // Trigger filter after scroll delay
      setTimeout(() => {
        document.getElementById('applyFilters')?.click();
      }, 600);
    });
  }
})();

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, stepTime);
}

/* ============================================================
   SCROLL REVEAL + COUNTERS
   ============================================================ */

(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const counterEls = document.querySelectorAll('[data-target]');
  const animatedCounters = new Set();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children within revealed containers
          entry.target.style.transitionDelay = `${i * 60}ms`;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // Counter observer
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedCounters.has(entry.target)) {
          animatedCounters.add(entry.target);
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach((el) => counterObserver.observe(el));
})();

/* ============================================================
   PROPERTY CARDS
   ============================================================ */

/**
 * Build a property card HTML string.
 * @param {Object} prop
 * @returns {string}
 */
function buildPropertyCard(prop) {
  const badgeClass = {
    'for-sale': 'badge-for-sale',
    'for-rent': 'badge-for-rent',
    sold: 'badge-sold',
  }[prop.status] || 'badge-for-sale';

  const badgeLabel = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    sold: 'Sold',
  }[prop.status] || 'For Sale';

  return `
    <article class="property-card" role="listitem" tabindex="0"
      data-id="${prop.id}"
      data-location="${prop.location.toLowerCase()}"
      data-type="${prop.type}"
      data-price="${prop.price}"
      data-beds="${prop.beds}">
      <div class="property-img-wrapper">
        <img src="${prop.image}" alt="${prop.title} in ${prop.location}" loading="lazy" />
        <span class="property-badge ${badgeClass}">${badgeLabel}</span>
        <button class="property-favorite" aria-label="Add to favorites" title="Save property">
          <i class="far fa-heart"></i>
        </button>
        <span class="property-type-tag">${prop.type}</span>
      </div>
      <div class="property-body">
        <p class="property-price">${prop.priceLabel}</p>
        <h3 class="property-title">${prop.title}</h3>
        <p class="property-location">
          <i class="fas fa-map-marker-alt"></i> ${prop.location}
        </p>
        <div class="property-features">
          <span class="feature-item">
            <i class="fas fa-bed"></i> ${prop.beds} Beds
          </span>
          <span class="feature-item">
            <i class="fas fa-bath"></i> ${prop.baths} Baths
          </span>
        </div>
        <div class="property-card-footer">
          <span class="property-area">
            <i class="fas fa-ruler-combined"></i> ${prop.area.toLocaleString()} sq ft
          </span>
          <a href="#contact" class="btn btn-primary btn-sm">View Details</a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render properties grid with optional filter.
 * @param {Object} filters
 */
function renderProperties(filters = {}) {
  const grid = document.getElementById('propertiesGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const filtered = PROPERTIES.filter((p) => {
    if (filters.location && p.location.toLowerCase() !== filters.location) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.beds && p.beds < parseInt(filters.beds, 10)) return false;
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');
  filtered.forEach((prop, i) => {
    const div = document.createElement('div');
    div.innerHTML = buildPropertyCard(prop);
    const card = div.firstElementChild;
    // Stagger animation delay
    card.style.animationDelay = `${i * 80}ms`;
    grid.appendChild(card);
  });

  // Favorite toggle
  grid.querySelectorAll('.property-favorite').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      if (btn.classList.contains('active')) {
        icon.classList.replace('far', 'fas');
        btn.setAttribute('aria-label', 'Remove from favorites');
      } else {
        icon.classList.replace('fas', 'far');
        btn.setAttribute('aria-label', 'Add to favorites');
      }
    });
  });
}

(function initPropertyFilters() {
  renderProperties();

  const applyBtn = document.getElementById('applyFilters');
  const resetBtn = document.getElementById('resetFilters');
  const resetBtn2 = document.getElementById('resetFilters2');

  function getFilters() {
    return {
      location: document.getElementById('filterLocation').value,
      type: document.getElementById('filterType').value,
      price: document.getElementById('filterPrice').value,
      beds: document.getElementById('filterBeds').value,
    };
  }

  function resetFilters() {
    document.getElementById('filterLocation').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterBeds').value = '';
    renderProperties();
  }

  applyBtn.addEventListener('click', () => renderProperties(getFilters()));
  resetBtn.addEventListener('click', resetFilters);
  if (resetBtn2) resetBtn2.addEventListener('click', resetFilters);

  // Also filter on Enter key in search bar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement.classList.contains('filter-select')) {
      renderProperties(getFilters());
    }
  });
})();

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */

(function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialsSlider');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');

  if (!slider) return;

  let currentIndex = 0;
  let autoplayTimer;

  // Build slides
  TESTIMONIALS.forEach((t, i) => {
    const stars = Array.from({ length: t.stars }, () => '<i class="fas fa-star"></i>').join('');
    slider.insertAdjacentHTML(
      'beforeend',
      `<div class="testimonial-card" role="tabpanel" aria-label="Testimonial ${i + 1} of ${TESTIMONIALS.length}">
        <div class="testimonial-inner">
          <div class="testimonial-stars">${stars}</div>
          <blockquote class="testimonial-text">"${t.text}"</blockquote>
          <div class="testimonial-author">
            <img src="${t.image}" alt="Photo of ${t.name}" loading="lazy" />
            <div>
              <p class="testimonial-name">${t.name}</p>
              <p class="testimonial-role">${t.role}</p>
            </div>
          </div>
        </div>
      </div>`
    );

    // Build dot
    const dot = document.createElement('button');
    dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    currentIndex = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
      d.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
    });

    resetAutoplay();
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const sliderWrapper = document.querySelector('.testimonials-slider-wrapper');
    if (!sliderWrapper) return;
    if (document.activeElement.closest('.testimonials-slider-wrapper')) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  }, { passive: true });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(next, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();

  // Pause on hover
  slider.closest('.testimonials-slider-wrapper')?.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  slider.closest('.testimonials-slider-wrapper')?.addEventListener('mouseleave', startAutoplay);
})();

/* ============================================================
   GALLERY + LIGHTBOX
   ============================================================ */

(function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!grid) return;

  let currentIndex = 0;

  // Render gallery
  GALLERY_IMAGES.forEach((img, i) => {
    grid.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-item" role="listitem" tabindex="0" 
        data-index="${i}" aria-label="Open ${img.caption}">
        <img src="${img.thumb}" alt="${img.caption}" loading="lazy" />
        <div class="gallery-overlay" aria-hidden="true">
          <div class="gallery-overlay-icon">
            <i class="fas fa-expand"></i>
          </div>
        </div>
        <p class="gallery-caption">${img.caption}</p>
      </div>`
    );
  });

  // Open lightbox
  function openLightbox(index) {
    currentIndex = index;
    const img = GALLERY_IMAGES[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.caption;
    lightboxCaption.textContent = img.caption;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxImg.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    grid.querySelectorAll('.gallery-item')[currentIndex]?.focus();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    const img = GALLERY_IMAGES[currentIndex];
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.caption;
      lightboxCaption.textContent = img.caption;
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    const img = GALLERY_IMAGES[currentIndex];
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.caption;
      lightboxCaption.textContent = img.caption;
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  // Smooth image transition
  lightboxImg.style.transition = 'opacity 0.15s ease';

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) openLightbox(parseInt(item.dataset.index, 10));
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.gallery-item');
      if (item) { e.preventDefault(); openLightbox(parseInt(item.dataset.index, 10)); }
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Touch swipe
  let touchX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? showNext() : showPrev(); }
  }, { passive: true });
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */

(function initFAQ() {
  const accordion = document.getElementById('faqAccordion');
  if (!accordion) return;

  FAQ_ITEMS.forEach((item, i) => {
    accordion.insertAdjacentHTML(
      'beforeend',
      `<div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-btn-${i}">
          <span>${item.question}</span>
          <span class="faq-icon" aria-hidden="true"><i class="fas fa-plus"></i></span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-btn-${i}">
          <p>${item.answer}</p>
        </div>
      </div>`
    );
  });

  accordion.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    accordion.querySelectorAll('.faq-item').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
})();

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */

(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    firstName: { required: true, minLength: 2, label: 'First name' },
    lastName: { required: true, minLength: 2, label: 'Last name' },
    email: { required: true, type: 'email', label: 'Email' },
    phone: { required: false, type: 'phone', label: 'Phone' },
    interest: { required: true, label: 'Interest' },
    message: { required: true, minLength: 20, label: 'Message' },
  };

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function validatePhone(val) {
    return val.trim() === '' || /^[\d\s\-()+]{7,20}$/.test(val.trim());
  }

  function setError(fieldId, message) {
    const el = document.getElementById(fieldId);
    const errEl = document.getElementById(`${fieldId}Error`);
    if (el) el.classList.toggle('error', !!message);
    if (errEl) errEl.textContent = message || '';
  }

  function clearError(fieldId) {
    setError(fieldId, '');
  }

  function validateField(id, value, rules) {
    if (rules.required && value.trim() === '') {
      return `${rules.label} is required.`;
    }
    if (rules.minLength && value.trim().length < rules.minLength) {
      return `${rules.label} must be at least ${rules.minLength} characters.`;
    }
    if (rules.type === 'email' && value.trim() && !validateEmail(value)) {
      return 'Please enter a valid email address.';
    }
    if (rules.type === 'phone' && !validatePhone(value)) {
      return 'Please enter a valid phone number.';
    }
    return '';
  }

  // Real-time validation
  Object.keys(fields).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const error = validateField(id, el.value, fields[id]);
      setError(id, error);
    });
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) {
        const error = validateField(id, el.value, fields[id]);
        setError(id, error);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;

    Object.keys(fields).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const error = validateField(id, el.value, fields[id]);
      setError(id, error);
      if (error) hasErrors = true;
    });

    if (hasErrors) {
      // Focus first errored field
      const firstError = form.querySelector('input.error, select.error, textarea.error');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission
    const submitBtn = document.getElementById('formSubmitBtn');
    const successMsg = document.getElementById('formSuccess');

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
      successMsg.classList.remove('hidden');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      setTimeout(() => successMsg.classList.add('hidden'), 6000);
    }, 1500);
  });
})();

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */

(function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const msg = document.getElementById('newsletterMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.className = 'newsletter-msg error';
      msg.classList.remove('hidden');
      emailInput.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Subscribing…';

    setTimeout(() => {
      emailInput.value = '';
      msg.textContent = '🎉 You\'re subscribed! Check your inbox for a welcome message.';
      msg.className = 'newsletter-msg success';
      msg.classList.remove('hidden');
      btn.disabled = false;
      btn.innerHTML = 'Subscribe <i class="fas fa-arrow-right"></i>';
      setTimeout(() => msg.classList.add('hidden'), 6000);
    }, 1200);
  });
})();

/* ============================================================
   BACK TO TOP
   ============================================================ */

(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const toggleVisibility = debounce(() => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, 100);

  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   SMOOTH SCROLL (fallback for browsers without native support)
   ============================================================ */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================================
   FOOTER COPYRIGHT YEAR
   ============================================================ */

(function setYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ============================================================
   PROPERTY CARD KEYBOARD NAVIGATION
   ============================================================ */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('property-card')) {
    const link = e.target.querySelector('a.btn');
    if (link) link.click();
  }
});
