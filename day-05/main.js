(function () {
	'use strict';

	document.querySelector('#show-password').checked = false;
	document.querySelector('#show-passwords').checked = false;

	var passwords = [];
	Array.prototype.slice.call(document.querySelectorAll('form')).forEach(function(el) {
		passwords.push(Array.prototype.slice.call(el.querySelectorAll('input[type=password]')));
	});

	function changePasswordFieldVisibility(passwordInputs, isVisible) {
		for (var i = 0; i < passwordInputs.length; i++) {
			passwordInputs[i].setAttribute('type', isVisible? 'text': 'password');
		}
	}

	window.addEventListener('change', function(event) {
		if (event.target.matches('#show-password')) {
			changePasswordFieldVisibility(passwords[0], event.target.checked)
		}
		if (event.target.matches('#show-passwords')) {
			changePasswordFieldVisibility(passwords[1], event.target.checked)
		}
	});
})();