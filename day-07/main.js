(function(d) {
	var countEl = d.querySelector('#character-count');
	var textArea = d.querySelector('#text');

	function updateCount() {
		countEl.textContent = textArea.value.trim().length;
	}

	updateCount();

	d.addEventListener('input', function(event) {
		if (event.target.matches('#text')) {
			updateCount()
		}
	});
})(document);