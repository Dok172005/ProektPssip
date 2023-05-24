document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTopButton.addEventListener('click', scrollToTop);
});