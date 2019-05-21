$('.nav-trigger').click(function() {
	$('.nav.side').toggleClass("active");
	$('.nav-trigger').toggleClass("hidden");
});
$('.fresh-modal-trigger').click(function() {
	$('.fresh-modal').toggleClass("active");
});
window.onclick = function(event) {
  if (event.target == $('.nav-trigger')) {
    $('.nav.side').toggleClass("active");
  }
}
