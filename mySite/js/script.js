const menu = document.querySelector('.header__list')
// const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.header__burger')
const closeIcon = document.querySelector('.closeIcon')
const menuIcon = document.querySelector('.menuIcon')

function toggleMenu() {
	if (menu.classList.contains('showMenu')) {
		menu.classList.remove('showMenu')
		closeIcon.style.display = 'none'
		menuIcon.style.display = 'block'
	} else {
		menu.classList.add('showMenu')
		closeIcon.style.display = 'block'
		menuIcon.style.display = 'none'
	}
}

hamburger.addEventListener('click', toggleMenu)
