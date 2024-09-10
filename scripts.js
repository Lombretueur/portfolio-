document.addEventListener('DOMContentLoaded', () => {
      const fadeElements = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(element);
      });

      const hamburger = document.querySelector('.hamburger');
      const nav = document.querySelector('nav');

      hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
      });

      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
          nav.classList.remove('active');
        }
      });

      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          nav.classList.remove('active');
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

      const themeToggle = document.createElement('button');
      themeToggle.textContent = 'Changer de thème';
      themeToggle.style.position = 'fixed';
      themeToggle.style.top = '20px';
      themeToggle.style.right = '20px';
      themeToggle.style.zIndex = '1000';
      themeToggle.style.padding = '10px';
      themeToggle.style.backgroundColor = 'var(--primary-color)';
      themeToggle.style.color = '#fff';
      themeToggle.style.border = 'none';
      themeToggle.style.borderRadius = '5px';
      themeToggle.style.cursor = 'pointer';

      document.body.appendChild(themeToggle);

      let isDarkTheme = false;

      themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
          document.documentElement.style.setProperty('--background-color', '#2c3e50');
          document.documentElement.style.setProperty('--text-color', '#ecf0f1');
          document.documentElement.style.setProperty('--primary-color', '#3498db');
          document.documentElement.style.setProperty('--secondary-color', '#34495e');
        } else {
          document.documentElement.style.setProperty('--background-color', '#ecf0f1');
          document.documentElement.style.setProperty('--text-color', '#34495e');
          document.documentElement.style.setProperty('--primary-color', '#3498db');
          document.documentElement.style.setProperty('--secondary-color', '#2c3e50');
        }
      });
    });