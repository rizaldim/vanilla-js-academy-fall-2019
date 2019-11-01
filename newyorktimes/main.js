(function (d) {
	const homeApiEndpoint = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=fSgrS1Zp5WBu2ImGOFBqyCsHz5jrqBGe";

	var app = d.querySelector('#app');

	var showNetworkError = function() {
		app.innerHTML = '<p>Something just went wrong. Sorry :(</p>';
	}

	var storiesAsList = function (stories) {
		return stories.map(function (story) {
			return '<li>'
				+ '<p>' + story.section
				+ (story.subsection == ''? '': (' - ' + story.subsection + '</p>'))
				+ '<p><a href="' + story.short_url + '">' + story.title + '</a></p>'
				+ '<p>' + story.abstract + '</p>'
				+ '<p>' + story.published_date + '</p>'
				+ '</li>';
		}).join('\n');
	}

	var showTopStories = function (data) {
		app.innerHTML = '<ol>' + storiesAsList(data.results) + '</ol>';
	}
	app.innerHTML = '<p>Getting data. Please wait :)</p>';

	fetch(homeApiEndpoint).then(function (response) {
		return response.ok? response.json(): Promise.reject(response);
	}).then(function (data) {
		showTopStories(data);
	}).catch(function (err) {
		showNetworkError();
	});
})(document);