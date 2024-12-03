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
function animateCounts() {
  const counters = document.querySelectorAll(".stat-number"); // Adjust selector to match your stat numbers
  const speed = 200; // The lower the speed, the faster the count

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target; // Ensure it reaches the exact target
      }
    };

    updateCount();
  });
}

// Call animateCounts on load
window.addEventListener("load", animateCounts);


window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);