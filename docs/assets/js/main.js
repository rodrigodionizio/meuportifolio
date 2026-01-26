// ===================================
// PORTFOLIO RODRIGO DIONIZIO
// JavaScript Core Functions
// ===================================

// === GLOBAL VARIABLES ===
let lastScrollTop = 0;
const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// === INIT ===
document.addEventListener("DOMContentLoaded", function () {
  initScrollEffects();
  initMobileMenu();
  initActiveNavigation();
  initSkillBars();
  initFormValidation();
  initSmoothScroll();
  initAnimationsOnScroll();
});

// === HEADER SCROLL BEHAVIOR ===
function initScrollEffects() {
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide/Show header on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// === MOBILE MENU ===
function initMobileMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll("span");
    spans[0].style.transform = navMenu.classList.contains("active")
      ? "rotate(-45deg) translate(-5px, 6px)"
      : "none";
    spans[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1";
    spans[2].style.transform = navMenu.classList.contains("active")
      ? "rotate(45deg) translate(-5px, -6px)"
      : "none";
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  });
}

// === ACTIVE NAVIGATION ===
function initActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// === SKILL BARS ANIMATION ===
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  let animated = false;

  const animateSkills = () => {
    if (animated) return;

    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.setProperty("--skill-width", width);
        bar.classList.add("animate");
      });
      animated = true;
    }
  };

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Check on load
}

// === ANIMATIONS ON SCROLL ===
function initAnimationsOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards, timeline items, etc.
  const animatedElements = document.querySelectorAll(
    ".card, .timeline-item, .project-card, .contact-item",
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// === FORM VALIDATION & SUBMISSION ===
function initFormValidation() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone")?.value.trim() || "",
      subject: document.getElementById("subject")?.value.trim() || "",
      message: document.getElementById("message").value.trim(),
    };

    // Validate
    if (!validateForm(formData)) {
      return;
    }

    // Show loading
    const submitBtn = contactForm.querySelector(".btn-primary");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
      // EmailJS integration (configure with your credentials)
      await sendEmail(formData);

      // Success
      showMessage(
        "Mensagem enviada com sucesso! Em breve entrarei em contato.",
        "success",
      );
      contactForm.reset();
    } catch (error) {
      // Error
      showMessage(
        "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.",
        "error",
      );
      console.error("Form submission error:", error);
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

function validateForm(data) {
  // Name validation
  if (data.name.length < 3) {
    showMessage("Por favor, digite seu nome completo.", "error");
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showMessage("Por favor, digite um email válido.", "error");
    return false;
  }

  // Message validation
  if (data.message.length < 10) {
    showMessage(
      "Por favor, digite uma mensagem com pelo menos 10 caracteres.",
      "error",
    );
    return false;
  }

  return true;
}

async function sendEmail(data) {
  // EmailJS configuration
  // Replace with your EmailJS credentials
  const serviceId = "YOUR_SERVICE_ID";
  const templateId = "YOUR_TEMPLATE_ID";
  const publicKey = "YOUR_PUBLIC_KEY";

  // For now, simulate email sending
  // In production, integrate with EmailJS or another service
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve();

      // To integrate EmailJS, uncomment below and configure:
      /*
      emailjs.send(serviceId, templateId, {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_email: 'rodrigo.dionizio@gmail.com'
      }, publicKey)
      .then(response => resolve(response))
      .catch(error => reject(error));
      */
    }, 1000);
  });
}

function showMessage(message, type) {
  // Remove existing messages
  const existingMsg = document.querySelector(".form-message");
  if (existingMsg) {
    existingMsg.remove();
  }

  // Create message element
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    animation: fadeInUp 0.3s ease-out;
    ${
      type === "success"
        ? "background: #d4edda; color: #155724; border: 1px solid #c3e6cb;"
        : "background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;"
    }
  `;

  const form = document.getElementById("contact-form");
  form.appendChild(messageDiv);

  // Auto remove after 5 seconds
  setTimeout(() => {
    messageDiv.style.animation = "fadeOut 0.3s ease-out";
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

// === UTILITY FUNCTIONS ===

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Get current year for footer
function updateCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Call on load
updateCurrentYear();

// === THEME TOGGLE (Optional Feature) ===
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", function () {
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// === TYPING EFFECT (Optional for Hero) ===
function initTypingEffect() {
  const typedElement = document.querySelector(".typed-text");
  if (!typedElement) return;

  const texts = [
    "Professor de Informática",
    "Desenvolvedor Full Stack",
    "Especialista em Infraestrutura",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typedElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500; // Pause before next text
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// === CONSOLE MESSAGE ===
console.log(
  "%c🚀 Portfólio Rodrigo Dionizio",
  "font-size: 20px; font-weight: bold; color: #2C5F8D;",
);
console.log(
  "%cDesenvolvido com HTML, CSS e JavaScript",
  "font-size: 12px; color: #6C757D;",
);
console.log(
  "%cGitHub: github.com/rodrigodionizio",
  "font-size: 12px; color: #0066CC;",
);
