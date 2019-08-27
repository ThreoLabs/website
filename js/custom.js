$(function(){ // this replaces document.ready
  $(window).on("load", function(){
    $('#preloader').fadeOut(3000, function() {
      $(this).remove();
    });
  });
});