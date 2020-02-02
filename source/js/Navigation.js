const Navigation = (function() {

	const navigation = document.querySelector('.header__navigation-wrapper');
	const openButton = document.querySelector('.header__burger-button');
	const closeButton = document.querySelector('.header__close-button');

	openButton.addEventListener('click', () => {
		openMenu();
	})
	closeButton.addEventListener('click', () => {
		closeMenu();
	})

	function openMenu() {
		navigation.classList.add('header__navigation-wrapper--active')
	}
	function closeMenu() {
		navigation.classList.remove('header__navigation-wrapper--active')
	}

})();