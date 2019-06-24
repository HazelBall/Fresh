var navs = document.getElementsByClassName('nav side');
var navTrigger = document.getElementsByClassName("nav-trigger");
var modalTrigger = document.querySelectorAll("[data-modal]");
var alertTrigger = document.querySelectorAll("[data-alert");
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
  navTrigger[i].addEventListener('click', function() {
  	activate(navs);
  });
}
for(var i = 0; i < modalTrigger.length; i ++) {
	modalTrigger[i].addEventListener('click', function(event) {
		if(event.target.hasAttribute('data-modal')) {
			var modalID = event.target.getAttribute('data-modal');
			var modal = document.getElementById(modalID);
			if(modal.classList.contains("active")) {
				modal.classList.remove("active");
			} else {
				modal.classList.add("active");
			}
		}
	});
}
for(var i = 0; i < alertTrigger.length; i ++) {
	alertTrigger[i].addEventListener('click', function(event) {
		if(event.target.hasAttribute('data-alert')) {
			var alertID = event.target.getAttribute('data-alert');
			var alert = document.getElementById(alertID);
			if(alert.classList.contains("active")) {
				alert.classList.remove("active");
			} else {
				alert.classList.add("active");
			}
		}
	});
}
document.body.addEventListener('click', function(event) {
	if(event.target.closest(".nav.side, .nav-trigger") === null) {
		for(var i = 0; i < navs.length; i ++) {
			navs[i].classList.remove('active');
		}
	}
	if(event.target.closest(".modal.active, [data-modal]") === null) {
		var modals = document.getElementsByClassName("modal");
		Array.prototype.forEach.call(modals, function(modal) {
			if(modal.classList.contains("active")) {
				modal.classList.remove("active");
			}
		});
	}
});
