$(function() {
  $( ".nav-trigger" ).click(function() {
      $(this).next(".trigger").toggleClass('open');
  });
});
