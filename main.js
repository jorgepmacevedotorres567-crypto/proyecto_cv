import './style.css'

// Animación de barras de progreso
function animateProgressBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.style.width;
        fill.style.width = '0';
        
        setTimeout(() => {
          fill.style.width = width;
        }, 100);
        
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  
  progressFills.forEach(fill => observer.observe(fill));
}

// Suavidad al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  animateProgressBars();
  
  // Efecto hover en elementos interactivos
  const contactLinks = document.querySelectorAll('.contact-item a');
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.opacity = '0.8';
    });
    link.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  });
});

console.log('CV Template cargado exitosamente');
