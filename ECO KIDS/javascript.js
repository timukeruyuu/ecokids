const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.scroll-fade').forEach(el => {
  observer.observe(el);
});
document.addEventListener('click', function (e) {
  const sparkle = document.createElement('span');
  sparkle.classList.add('click-effect');
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600); // remove after animation
});
/* Default hidden state */
const scrollElements = document.querySelectorAll('.scroll-fade');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const hideScrollElement = (element) => {
  element.classList.remove('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Trigger on load too
handleScrollAnimation();
function setLanguage(lang) {
  const allLangElems = document.querySelectorAll('.lang');

  allLangElems.forEach(el => {
    if (el.classList.contains(lang)) {
      el.style.display = 'inline';
    } else {
      el.style.display = 'none';
    }
  });

  // Save user language in localStorage
  localStorage.setItem('site-language', lang);
}

// On page load: use saved language or default to 'en'
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site-language') || 'en';
  setLanguage(savedLang);
});
