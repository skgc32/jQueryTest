$(function () {
  $('#js-hamburger-menu, .nav-link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});
