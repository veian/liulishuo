var app = app || {};

(function () {
	var Tabs = Backbone.Collection.extend({
		model: app.Tab,
		tabs: [
			{
				title: '活动详情',
				pageId: '#page-eventdetail',
				id: 'eventdetail'
			},
			{
				title: '排行榜',
				pageId: '#page-leaderboard',
				id: 'leaderboard',
				active: true
			},
			{
				title: '成绩公布',
				pageId: '#page-winner',
				id: 'winner'
			},
			{
				title: '我',
				pageId: '#page-me',
				id: 'me'
			}
		],
		// 初始化
		initialize: function() {
			this.add(this.tabs);
		},
		
		//
		getActive: function() {
			return this.filter(function (tab) {
				return tab.get('active');
			});
		}
	});

	app.Tabs = new Tabs();
})();
