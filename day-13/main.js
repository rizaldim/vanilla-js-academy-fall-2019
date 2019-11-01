(function (d) {
	var blockquote = Array.prototype.slice.call(document.getElementsByTagName('blockquote'))[0];
	var button = Array.prototype.slice.call(document.getElementsByTagName('button'))[0];

	var reloadQuote = function () {
		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function (response) {
			if (response.ok) {
				return response.json();
			} else {

			}
		}).then(function (data) {
			blockquote.textContent = data[0];
		}).catch(function (err) {
			console.warn('Something went wrong.', err);
		});
	}

	reloadQuote();

	button.addEventListener('click', function () {
		blockquote.textContent = 'Getting random quote...';
		reloadQuote();
	}, false);
})();