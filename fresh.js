$('.nav-trigger').click(function() {
	$('.nav.side').toggleClass("active");
	$('.nav-trigger').toggleClass("hidden");
});
$('.fresh-modal-trigger').click(function() {
	$('.fresh-modal').toggleClass("active");
});
window.onclick = function(event) {
  if (event.target == $('.fresh-modal-trigger') || event.target == $('.nav-trigger')) {
    modal.style.display = "none";
  }
}
