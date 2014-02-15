var app = app || {};

(function () {
	app.Rank = Backbone.Model.extend({
		defaults: {
			user: {
				id: 0,
				avatar: '',
				username: ''
			},
			title: ''
		}
	});
})();