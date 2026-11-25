// ============================================================
// MAIN.JS — E-commerce Portfolio: Chử Văn Phụng
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  fillContactInfo();
  updateFilterCounts();
  renderPortfolio();
  renderLightboxDots();
  initNavbar();
  initHamburger();
  initScrollEffects();
  initFilterButtons();
  initBackToTop();
  initKeyboardNav();
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

// ── Fill Contact Info from CVData ─────────────────────────
function fillContactInfo() {
  if (typeof CVData === 'undefined') return;

  const emailEl = document.getElementById('emailVal');
  if (emailEl && CVData.email) {
    emailEl.textContent = CVData.email;
    emailEl.dataset.email = CVData.email;
  }

  const phoneEl = document.getElementById('phoneVal');
  if (phoneEl) {
    phoneEl.textContent = CVData.phone || "0902 596 732";
  }

  const linkedinEl = document.getElementById('linkedinVal');
  if (linkedinEl && CVData.linkedin) {
    linkedinEl.href = CVData.linkedin;
    linkedinEl.textContent = CVData.linkedin.replace('https://www.', '').replace('https://', '');
  }

  const cvBtns = document.querySelectorAll('.btn-cv, a[download]:not(#lightboxDownloadBtn):not(.exp-doc-link)');
  cvBtns.forEach(btn => {
    if (CVData.cvPdfPath) {
      btn.setAttribute('href', CVData.cvPdfPath);
    }
  });
}

// ── Navbar behavior & Scroll Progress & Active Spy ────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateNavbarAndSpy = () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    // 1. Scrolled background (Kính mờ khi cuộn > 30px)
    if (navbar) {
      if (scrollPos > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // 2. Scroll Progress Bar (Cam Shopee 3px)
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? (scrollPos / scrollTotal) * 100 : 0;
    const progressBar = document.getElementById('scrollProgressBar');
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // 3. Active Menu Spy
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    // Khi cuộn tới sát cuối trang, kích hoạt mục Liên hệ
    if (window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 60) {
      current = 'contact';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateNavbarAndSpy, { passive: true });
  updateNavbarAndSpy();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ── Mobile Menu ───────────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger) hamburger.classList.remove('active');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// ── Intersection Observer (Fade-up) ───────────────────────
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}

// ── Update Filter Counts Dynamically ──────────────────────
function updateFilterCounts() {
  if (typeof portfolioItems === 'undefined') return;

  const countAll = portfolioItems.length;
  const countOps = portfolioItems.filter(item => item.category === 'ops').length;
  const countProduct = portfolioItems.filter(item => item.category === 'product').length;
  const countSocial = portfolioItems.filter(item => item.category === 'social').length;
  const countCaseStudy = portfolioItems.filter(item => item.category === 'case-study' || item.category === 'video').length;

  const elAll = document.getElementById('filterCountAll');
  const elOps = document.getElementById('filterCountOps');
  const elProduct = document.getElementById('filterCountProduct');
  const elSocial = document.getElementById('filterCountSocial');
  const elCaseStudy = document.getElementById('filterCountCaseStudy');

  if (elAll) elAll.textContent = countAll;
  if (elOps) elOps.textContent = countOps;
  if (elProduct) elProduct.textContent = countProduct;
  if (elSocial) elSocial.textContent = countSocial;
  if (elCaseStudy) {
    elCaseStudy.textContent = countCaseStudy;
    const btnCaseStudy = elCaseStudy.closest('.filter-btn');
    if (btnCaseStudy) {
      btnCaseStudy.style.display = countCaseStudy === 0 ? 'none' : '';
    }
  }
}

// ── Render Portfolio Grid & Event Delegation ──────────────
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid || typeof portfolioItems === 'undefined') return;
  grid.innerHTML = '';

  portfolioItems.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'portfolio-card fade-up';
    card.dataset.category = item.category;
    card.dataset.index = i;
    card.dataset.id = item.id !== undefined ? item.id : i;
    card.style.animationDelay = `${(i % 3) * 0.1}s`;

    let badgeIcon = 'sparkles';
    let badgeText = 'Kết Quả Studio';
    if (item.category === 'ops') {
      badgeIcon = 'file-spreadsheet';
      badgeText = 'Excel CRM · Case Study';
    } else if (item.gallery && item.gallery.length > 0) {
      badgeIcon = 'layers';
      badgeText = `Bộ ${item.gallery.length} Ảnh 1:1`;
    } else if (item.isBanner) {
      badgeIcon = 'layout';
      badgeText = 'Banner 16:9';
    }

    const imgSrc = item.image || item.src;

    card.innerHTML = `
      <div class="portfolio-card-img">
        <div class="portfolio-img-box">
          <span class="card-before-after-pill"><i data-lucide="${badgeIcon}" class="badge-mini-icon"></i> ${badgeText}</span>
          <img src="${imgSrc}" alt="${item.title}" class="portfolio-img" loading="lazy" />
        </div>
        <div class="portfolio-card-overlay">
          <span class="portfolio-open-btn">
            Xem chi tiết & So sánh →
          </span>
        </div>
      </div>
      <div class="portfolio-card-info">
        <div class="portfolio-card-meta">
          <span class="portfolio-tag">${item.tag || item.categoryLabel}</span>
          ${item.metric ? `<span class="portfolio-metric-pill">${item.metric}</span>` : ''}
        </div>
        <h3 class="portfolio-card-title">${item.title}</h3>
      </div>
    `;

    grid.appendChild(card);
  });

  // Event Delegation trên #portfolioGrid: Bắt sự kiện click vào bất kỳ đâu trên thẻ
  if (!grid.dataset.hasClickListener) {
    grid.dataset.hasClickListener = 'true';
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.portfolio-card');
      if (!card) return;
      const index = parseInt(card.dataset.index, 10);
      if (!isNaN(index) && portfolioItems[index]) {
        openLightbox(index);
      }
    });
  }

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
  initScrollEffects();
}

// ── Filter Buttons ────────────────────────────────────────
function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterPortfolio(btn.dataset.filter);
    });
  });
}

function filterPortfolio(filter) {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    const isMatch = filter === 'all' ||
                    cardCat === filter ||
                    (filter === 'case-study' && (cardCat === 'case-study' || cardCat === 'video'));

    if (isMatch) {
      card.style.display = '';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 20);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

// ── Lightbox Modal Dynamic Gallery & Raw Tabs ─────────────
let currentLightboxIndex = 0;

function openLightbox(index) {
  index = parseInt(index, 10);
  if (isNaN(index) || typeof portfolioItems === 'undefined' || !portfolioItems[index]) return;

  currentLightboxIndex = index;
  updateLightbox(index);

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('open', 'active');
  }
  document.body.style.overflow = 'hidden';
  updateDots();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('open', 'active');
  }
  document.body.style.overflow = '';
}

function prevItem() {
  if (typeof portfolioItems === 'undefined' || !portfolioItems.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + portfolioItems.length) % portfolioItems.length;
  updateLightbox(currentLightboxIndex);
  updateDots();
}

function nextItem() {
  if (typeof portfolioItems === 'undefined' || !portfolioItems.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % portfolioItems.length;
  updateLightbox(currentLightboxIndex);
  updateDots();
}

function updateLightbox(index) {
  if (typeof portfolioItems === 'undefined' || !portfolioItems[index]) return;
  const item = portfolioItems[index];

  const titleEl = document.getElementById('lightboxTitle');
  const tagEl = document.getElementById('lightboxTag');
  const goalEl = document.getElementById('lightboxGoal');
  const toolsEl = document.getElementById('lightboxTools');
  const ecomEl = document.getElementById('lightboxEcom');

  if (titleEl) titleEl.textContent = item.title || '';
  if (tagEl) tagEl.textContent = item.tag || item.categoryLabel || '';
  if (goalEl) goalEl.textContent = item.goal || '';
  if (toolsEl) toolsEl.textContent = item.tools || '';
  if (ecomEl) ecomEl.textContent = item.ecom || '';

  const downloadBtn = document.getElementById('lightboxDownloadBtn');
  if (downloadBtn) {
    if (item.downloadUrl) {
      downloadBtn.href = item.downloadUrl;
      downloadBtn.style.display = 'inline-flex';
    } else {
      downloadBtn.href = '#';
      downloadBtn.style.display = 'none';
    }
  }

  renderLightboxTabs(item);
}

// Render dynamic tabs exclusively based on #lightboxImgTabs
function renderLightboxTabs(item) {
  const tabsContainer = document.getElementById('lightboxImgTabs');
  if (!tabsContainer || !item) return;
  tabsContainer.innerHTML = '';

  const tabs = [];

  if (item.gallery && item.gallery.length > 0) {
    item.gallery.forEach((g) => {
      tabs.push({
        label: g.label,
        icon: 'image',
        src: g.src,
        badgeText: `${g.label}`,
        badgeClass: 'badge-result'
      });
    });
  } else {
    tabs.push({
      label: item.isBanner ? 'Banner 16:9 Hoàn Thiện' : 'Ảnh Kết Quả Studio',
      icon: item.isBanner ? 'layout' : 'sparkles',
      src: item.image || item.src,
      badgeText: item.isBanner ? 'Banner 16:9 Hoàn Thiện' : 'Ảnh Kết Quả Studio',
      badgeClass: 'badge-result'
    });
  }

  // Raw image comparison tab
  const rawSrc = item.rawImage || item.rawSrc;
  if (rawSrc) {
    tabs.push({
      label: 'Ảnh Gốc Ban Đầu',
      icon: 'camera',
      src: rawSrc,
      badgeText: 'Ảnh Gốc Ban Đầu',
      badgeClass: 'badge-raw'
    });
  }

  // Create buttons dynamically
  tabs.forEach((tab, tabIdx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `img-tab-btn ${tabIdx === 0 ? 'active' : ''}`;
    btn.innerHTML = `<i data-lucide="${tab.icon}"></i> ${tab.label}`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLightboxImage(tab, tabIdx);
    });
    tabsContainer.appendChild(btn);
  });

  // Default to first tab
  if (tabs.length > 0) {
    setLightboxImage(tabs[0], 0);
  }

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

function setLightboxImage(tabData, activeIdx) {
  const img = document.getElementById('lightboxImg');
  const badge = document.getElementById('lightboxImgBadge');

  if (img) {
    img.src = tabData.src;
    img.alt = tabData.label;
  }
  if (badge) {
    badge.textContent = tabData.badgeText;
    badge.className = `lightbox-img-badge ${tabData.badgeClass}`;
  }

  const tabsContainer = document.getElementById('lightboxImgTabs');
  if (tabsContainer) {
    const allBtns = tabsContainer.querySelectorAll('.img-tab-btn');
    allBtns.forEach((b, idx) => {
      b.classList.toggle('active', idx === activeIdx);
    });
  }
}

function renderLightboxDots() {
  const dotsContainer = document.getElementById('lightboxDots');
  if (!dotsContainer || typeof portfolioItems === 'undefined') return;
  dotsContainer.innerHTML = '';
  portfolioItems.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `lightbox-dot ${i === currentLightboxIndex ? 'active' : ''}`;
    dot.onclick = (e) => {
      e.stopPropagation();
      currentLightboxIndex = i;
      updateLightbox(i);
      updateDots();
    };
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentLightboxIndex);
  });
}

// ── Keyboard Controls ─────────────────────────────────────
function initKeyboardNav() {
  document.addEventListener('keydown', e => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || (!lightbox.classList.contains('open') && !lightbox.classList.contains('active'))) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevItem();
    if (e.key === 'ArrowRight') nextItem();
  });
}

// ── Toast Notification & Copy Actions ─────────────────────
let toastTimer = null;
function showToast(message = 'Đã sao chép vào bộ nhớ tạm!') {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  const msgEl = toast.querySelector('.toast-message');
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (err) {}
  document.body.removeChild(textarea);
}

function copyEmail() {
  const emailEl = document.getElementById('emailVal');
  const email = (emailEl?.dataset.email || emailEl?.textContent || (typeof CVData !== 'undefined' ? CVData.email : '') || 'phungchu552@gmail.com').trim();

  const handleSuccess = () => {
    showToast('Đã sao chép vào bộ nhớ tạm!');
    const icon = document.getElementById('copyIcon');
    if (icon) {
      icon.setAttribute('data-lucide', 'check');
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      setTimeout(() => {
        icon.setAttribute('data-lucide', 'copy');
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      }, 2000);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(handleSuccess).catch(() => {
      fallbackCopyText(email);
      handleSuccess();
    });
  } else {
    fallbackCopyText(email);
    handleSuccess();
  }
}

function copyPhone() {
  const phoneEl = document.getElementById('phoneVal');
  const phone = (phoneEl?.textContent || (typeof CVData !== 'undefined' ? CVData.phone : '') || '0902 596 732').trim();

  const handleSuccess = () => {
    showToast('Đã sao chép vào bộ nhớ tạm!');
    const icon = document.getElementById('copyPhoneIcon');
    if (icon) {
      icon.setAttribute('data-lucide', 'check');
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      setTimeout(() => {
        icon.setAttribute('data-lucide', 'copy');
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      }, 2000);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phone).then(handleSuccess).catch(() => {
      fallbackCopyText(phone);
      handleSuccess();
    });
  } else {
    fallbackCopyText(phone);
    handleSuccess();
  }
}

// ── Contact Form ──────────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('formName').value;
  const company = document.getElementById('formCompany').value;
  const email = document.getElementById('formEmail').value;
  const message = document.getElementById('formMessage').value;

  const subject = encodeURIComponent(`[Ứng Tuyển TMĐT] Lời nhắn từ ${name}${company ? ' (' + company + ')' : ''}`);
  const body = encodeURIComponent(
    `Kính gửi bạn Phụng,\n\n${message}\n\n` +
    `---------------------------------------\n` +
    `Người liên hệ: ${name}\n` +
    `Đơn vị/Công ty: ${company || 'Cá nhân'}\n` +
    `Email phản hồi: ${email}\n`
  );

  const targetEmail = (typeof CVData !== 'undefined' && CVData.email) ? CVData.email : 'phungchu552@gmail.com';
  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

  // UI feedback
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'flex';
    setTimeout(() => {
      form.style.display = 'flex';
      success.style.display = 'none';
      form.reset();
    }, 4500);
  }
}

// ── Back to Top ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}