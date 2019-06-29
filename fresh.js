var navs = document.getElementsByClassName('nav side');
var navTrigger = document.getElementsByClassName("nav-trigger");
var modalTrigger = document.querySelectorAll("[data-modal]");
var alertTrigger = document.querySelectorAll("[data-alert]");
var toggleActive = function(id) {
	var element= document.getElementById(id);
	if(element.classList.contains("active")) {
		element.classList.remove("active");
	} else {
		element.classList.add("active");
	}
}
var navActivate = function(obj) {
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
  	navActivate(navs);
  });
}
for(var i = 0; i < modalTrigger.length; i ++) {
	modalTrigger[i].addEventListener('click', function(event) {
		if(event.target.hasAttribute('data-modal')) {
			var modalID = event.target.getAttribute('data-modal');
			toggleActive(modalID);
		}
	});
}
for(var i = 0; i < alertTrigger.length; i ++) {
	alertTrigger[i].addEventListener('click', function(event) {
		if(event.target.hasAttribute('data-alert')) {
			var alertID = event.target.getAttribute('data-alert');
			toggleActive(alertID);
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
