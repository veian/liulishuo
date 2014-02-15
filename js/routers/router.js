var app = app || {};

(function () {
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'page-*': 'setFilter'
		},

		setFilter: function (param) {
			app.Tabs.trigger('switchTab')
		}
	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();
