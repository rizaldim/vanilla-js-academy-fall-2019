(function(d) {
	var charCountEl = d.querySelector('#character-count');
	var wordCountEl = d.querySelector('#word-count');
	var textArea = d.querySelector('#text');

	function updateCount() {
		var content = textArea.value.trim()
		var words = content.split(/\s/).filter(function (item) {
			return item.length > 0;
		});
		charCountEl.textContent = content.length;
		wordCountEl.textContent = words.length;
	}

	updateCount();

	d.addEventListener('input', function(event) {
		if (event.target.matches('#text')) {
			updateCount()
		}
	});
})(document);