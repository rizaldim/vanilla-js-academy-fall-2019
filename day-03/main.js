(function () {
	'use strict';
	var passwords = document.querySelectorAll('input[type=password]');
	var show = document.querySelector('#show-passwords');

	var f = function() {
		var isChecked = show.checked;
		Array.prototype.slice.call(passwords).forEach(function(el) {
			el.setAttribute('type', isChecked ? 'text' : 'password');
		})
	}

	show.addEventListener('change', f, false);

	f();
})()