var app = app || {};

(function($) {
	app.AppView = Backbone.View.extend({
		el: '#app',
		
		events: {
			
		},
		
		initialize: function() {
			this.$header = this.$('#header');
			this.$container = this.$('#container');
			this.$footer = this.$('#footer');
			this.$nav = this.$('#bottom-nav')
			
			this.listenTo(app.Tabs, 'initTabs', this.initTabs);
			this.listenTo(app.Tabs, 'switchTab', this.switchTab);
			app.Tabs.trigger('initTabs');
		},
		
		// 初始化 tab
		initTabs: function() {
			this.$nav.empty();
			app.Tabs.each(function(tab) {
				new app.TabView({ model: tab });
			}, this);
		},
		
		// 切换页面
		switchTab: function() {
			
		}
	});
})(Zepto);