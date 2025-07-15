
  const burger = document.getElementById('burger');
  const menuLinks = document.getElementById('menuLinks');

  burger.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
  });