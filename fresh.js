var navs = document.getElementsByClassName('nav side');
var navTrigger = document.getElementsByClassName("nav-trigger");
var modals = document.getElementsByClassName('modal');
var modalTrigger = document.getElementsByClassName("modal-trigger");
var activate = function(obj) {
	console.log("nav trigger activated");
	for(var i = 0; i < obj.length; i ++) {
	  if(obj[i].classList.contains("active")) {
	  	obj[i].classList.remove("active");
	  } else {
	  	obj[i].classList.add("active");
	  }
	}
};
for (var i = 0; i < navTrigger.length; i++) {
	console.log('another nav-trigger');
  navTrigger[i].addEventListener('click', function() {
  	activate(navs);
  });
}
for(var i = 0; i < modalTrigger.length; i ++) {
	modalTrigger[i].addEventListener('click', function() {
		var modalID = modalTrigger[i].getAttribute('data-modal');
		
	});
}
document.body.addEventListener('click', function(event) {
	if(event.target.closest(".nav.side, .nav-trigger") === null) {
		for(var i = 0; i < navs.length; i ++) {
			navs[i].classList.remove('active');
		}
	}
	if(event.target.closest(".modal, .modal-trigger") === null) {
		for(var i = 0; i < modals.length; i ++) {
			modals[i].classList.remove('active');
		}
	}
});
