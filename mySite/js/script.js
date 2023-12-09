const menu = document.querySelector('.header__list')
// const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.header__burger')

function toggleMenu() {
	if (menu.classList.contains('showMenu') && hamburger.classList.contains('show')  ) {
		menu.classList.remove('showMenu')
		hamburger.classList.remove('show')
	} else {
		menu.classList.add('showMenu')
		hamburger.classList.add('show')
	}
}

hamburger.addEventListener('click', toggleMenu)




