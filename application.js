$( document ).ready(function() {
  $('.hideseek').hide();
  $('button').on('click', function() {
  $('.hideseek' ).show('slow');
  $('button').remove();
});
});