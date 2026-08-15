// ==========================================================================
// Harshawardhan Shrivastava — Portfolio Interactive Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Email Copy with Toast Notification
  const copyButtons = document.querySelectorAll('.js-copy-email');
  const toast = document.getElementById('toast');
  const emailToCopy = 'connect.harshawardhan@gmail.com';

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast('Email copied to clipboard: ' + emailToCopy);
      }).catch(() => {
        showToast('Direct email: ' + emailToCopy);
      });
    });
  });

  // 2. Collaboration Form Handler (Mailto Composer)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const senderEmail = document.getElementById('formEmail').value.trim();
      const topic = document.getElementById('formTopic').value;
      const message = document.getElementById('formMessage').value.trim();

      const subject = encodeURIComponent(`[${topic}] Opportunity / Collaboration Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hi Harshawardhan,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${senderEmail}`
      );

      window.location.href = `mailto:connect.harshawardhan@gmail.com?subject=${subject}&body=${body}`;
      showToast('Opening your email client...');
    });
  }

  // 3. Smooth scroll active nav spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksList = document.getElementById('navLinksList');

  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinksList.style.display === 'flex';
      navLinksList.style.display = isVisible ? 'none' : 'flex';
      navLinksList.style.flexDirection = 'column';
      navLinksList.style.position = 'absolute';
      navLinksList.style.top = '100%';
      navLinksList.style.left = '0';
      navLinksList.style.width = '100%';
      navLinksList.style.background = 'rgba(7, 10, 18, 0.96)';
      navLinksList.style.padding = '1.5rem';
      navLinksList.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
    });
  }
});
