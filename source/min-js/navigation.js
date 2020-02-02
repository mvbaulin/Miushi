"use strict";

var Navigation = function () {
  var navigation = document.querySelector('.header__navigation-wrapper');
  var openButton = document.querySelector('.header__burger-button');
  var closeButton = document.querySelector('.header__close-button');
  openButton.addEventListener('click', function () {
    openMenu();
  });
  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  function openMenu() {
    navigation.classList.add('header__navigation-wrapper--active');
  }

  function closeMenu() {
    navigation.classList.remove('header__navigation-wrapper--active');
  }
}();