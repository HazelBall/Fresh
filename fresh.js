var navs = document.getElementsByClassName('nav side');
var navTrigger = document.getElementsByClassName("nav-trigger");
var tetherTriggers = document.querySelectorAll("[data-tether]");
var navActivate = function(obj) {
	for(var i = 0; i < obj.length; i ++)
	  if(obj[i].classList.contains("active"))
	  	obj[i].classList.remove("active");
	  else
	  	obj[i].classList.add("active");
};
function tether(triggers, tetherFunc) {
	for(var i = 0; i < triggers.length; i ++)
		triggers[i].addEventListener('click', function(event) {
			var tetherID = event.target.getAttribute('data-tether');
			var tetherElement = document.getElementById(tetherID);
			var tethered = [event.target, tetherElement];
			tetherFunc(tethered);
		});
}
function accordion(tether) {
	var trigger = tether[0];
	var element = tether[1];
	if(element.style.maxHeight) {
		trigger.classList.remove("active");
		element.style.maxHeight = null;
		element.style.padding = 0 + " " + 34 + "px";
		setTimeout(function(){
			element.style.overflow = "hidden";
		}, 10);
	} else {
		element.style.maxHeight = (element.scrollHeight + 40) + "px";
		element.style.padding = 20 + "px " + 34 + "px";
		setTimeout(function(){
			element.style.overflow = "visible";
		}, 650);
		trigger.classList.add("active");
	}
}
tether(tetherTriggers, function(tethered) {
	var trigger = tethered[0];
	var element = tethered[1];
	if(element.classList.contains("accordion"))
		accordion(tethered);
	else
		element.classList.toggle('activated');
});
for (var i = 0; i < navTrigger.length; i++)
  navTrigger[i].addEventListener('click', function() {
  	navActivate(navs);
  });
document.body.addEventListener('click', function(event) {
	if(event.target.closest(".nav.side, .nav-trigger") === null)
		for(var i = 0; i < navs.length; i ++)
			navs[i].classList.remove('active');
	if(event.target.closest(".modal.active, [data-modal]") === null) {
		var modals = document.getElementsByClassName("modal");
		Array.prototype.forEach.call(modals, function(modal) {
			if(modal.classList.contains("active"))
				modal.classList.remove("active");
		});
	}
});
