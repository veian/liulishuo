var app = app || {};

(function($) {
	app.AppView = Backbone.View.extend({
		el: '#app',
		
		events: {
			
		},
		
		initialize: function() {
			this.$header = $('#header');
			this.$container = $('#container');
			this.$footer = $('#footer');
			this.$nav = $('#bottom-nav');
			
			this.initTabs();
			this.listenTo(app.Tabs, 'switchTab', this.switchTab);
		},
		
		// 初始化 tab
		initTabs: function() {
			this.$nav.empty();
			app.Tabs.each(function(tab) {
				var view = new app.TabView({ model: tab });
				this.$nav.append(view.el);
			}, this);
		},
		
		// 切换页面
		switchTab: function(param) {
			var id = param[0];
			
			var tab = app.Tabs.get(id);
			
			tab.trigger('visible');
		}
	});
})(Zepto);