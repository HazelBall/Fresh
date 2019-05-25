$('.nav-trigger').click(function() {
	$('.nav.side').toggleClass("active").focus();
});
$('.fresh-modal-trigger').click(function() {
	$('.fresh-modal').toggleClass("active");
});
$('body').on('click', function(e) {
  if($(e.target).closest('.nav.side, .nav-trigger').length == 0) {
    $('.nav.side').removeClass('active');
  }
});
