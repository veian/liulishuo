var app = app || {};

(function ($) {
	app.LeaderboardView = Backbone.View.extend({
		el: "#container",
		
		template: _.template($('#leaderboard-template').html()),
	});
})(Zepto);
