const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
const year = document.querySelector('[data-year]');
const donationForm = document.querySelector('[data-donation-form]');
const donationMessage = document.querySelector('[data-donation-message]');
const contactForm = document.querySelector('[data-contact-form]');
const contactMessage = document.querySelector('[data-contact-message]');

year.textContent = new Date().getFullYear();

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navPanel.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navPanel.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navPanel.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

donationForm.addEventListener('click', (event) => {
  const button = event.target.closest('[data-amount]');
  if (!button) return;

  donationForm.querySelectorAll('[data-amount]').forEach((item) => item.classList.remove('is-selected'));
  button.classList.add('is-selected');
  donationForm.elements.amount.value = button.dataset.amount;
});

donationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number.parseInt(donationForm.elements.amount.value, 10);

  if (!amount || amount < 1) {
    donationMessage.textContent = 'Please enter a valid gift amount.';
    return;
  }

  donationMessage.textContent = `Thank you for pledging $${amount.toLocaleString()} to support transatlantic wellness.`;
  donationForm.reset();
  donationForm.querySelectorAll('[data-amount]').forEach((item) => item.classList.remove('is-selected'));
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const topic = data.get('topic');
  const message = data.get('message').trim();

  if (!name || !email || !topic || !message) {
    contactMessage.textContent = 'Please complete every field before preparing your email.';
    return;
  }

  const subject = encodeURIComponent(`TWI website inquiry: ${topic}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
  window.location.href = `mailto:hello@transatlanticwellness.org?subject=${subject}&body=${body}`;
  contactMessage.textContent = 'Your email draft is ready. Thank you for connecting with TWI.';
  contactForm.reset();
});
