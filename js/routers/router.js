var app = app || {};

(function () {
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'page-eventdetail': 'eventdetail',
			'page-leaderboard': 'leaderboard',
			'page-winner': 'winner',
			'page-me': 'me'
		},

		leaderboard: function (param) {
			app.Tabs.trigger('switchTab', ['leaderboard', param || '']);
		},
		
		eventdetail: function(param) {
			app.Tabs.trigger('switchTab', ['eventdetail', param || '']);
		},
		winner: function(param) {
			app.Tabs.trigger('switchTab', ['winner', param || '']);
		},
		me: function(param) {
			app.Tabs.trigger('switchTab', ['me', param || '']);
		}
	});

	app.TodoRouter = new TodoRouter();
})();
