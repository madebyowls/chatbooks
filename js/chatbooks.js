document.addEventListener('DOMContentLoaded', function(){
	var fader = document.querySelector('.floater .fade');
	var header = document.querySelector('header');
	window.addEventListener('scroll', function(){
		var breakpoint = header.offsetHeight;
		var hasClass = classTest(fader, inClass);

		if( window.scrollY > breakpoint && !hasClass ){
			if (fader.classList){
				fader.classList.add(inClass);
			}
			else {
				fader.className += ' ' + inClass;
			}
		}

		else if( window.scrollY <= breakpoint && hasClass){
			if (fader.classList){
				fader.classList.remove(inClass);
			}
			else {
				fader.className = fader.className.replace(new RegExp('(^| )' + inClass.split(' ').join('|') + '( |$)', 'gi'), ' ');
			}
		}
	});
});

var inClass ="in";


function classToggler(){
}

function classTest(el, className){
	if (el.classList)
		if (el.classList.contains(className))
			return true;
	else
		if( new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className) )
			return true;
	return false;
}