var app = app || {};

(function () {
	var Ranks = Backbone.Collection.extend({
		model: app.Rank,
	});

	app.Ranks = new Ranks();
})();
