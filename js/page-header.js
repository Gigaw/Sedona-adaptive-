var pageHeader = document.querySelector('.page-header');
var menuToggle = pageHeader.querySelector('.page-header__toggle')


pageHeader.classList.remove('page-header--nojs');

menuToggle.addEventListener('click', function(evt){
  evt.preventDefault();

  pageHeader.classList.toggle('page-header--closed');
  pageHeader.classList.toggle('page-header--opened');
})
