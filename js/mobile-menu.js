document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.createElement('div');
  menuButton.classList.add('menu-button');
  document.body.appendChild(menuButton);

  menuButton.addEventListener('click', function () {
    const headerNavMenu = document.querySelector('.header_nav_menu');
    headerNavMenu.style.display = headerNavMenu.style.display === 'none' ? 'block' : 'none';
  });
});