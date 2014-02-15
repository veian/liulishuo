var app = app || {};

(function () {
	var Tabs = Backbone.Collection.extend({
		url: '/',
		model: app.Tab,
		tabs: [
			{
				title: '活动详情',
				link: '#page-eventdetail',
				id: 'eventdetail'
			},
			{
				title: '排行榜',
				link: '#page-leaderboard',
				id: 'leaderboard',
				active: true
			},
			{
				title: '成绩公布',
				link: '#page-winner',
				id: 'winner'
			},
			{
				title: '我',
				link: '#page-me',
				id: 'me'
			}
		],
		initialize: function() {
			this.add(this.tabs);
		}
	});

	app.Tabs = new Tabs();
})();
