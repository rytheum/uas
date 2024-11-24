function toggleMenu() {
  const navbarUl = document.querySelector('.navbar ul');
  const menuIcon = document.querySelector('.menu-icon');
  navbarUl.classList.toggle('show');
  menuIcon.classList.toggle('open');
}

function handleScroll() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
          box.style.opacity = '1';
          box.style.transform = 'translateY(0)';
      } else {
          box.style.opacity = '0';
          box.style.transform = 'translateY(20px)';
      }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);