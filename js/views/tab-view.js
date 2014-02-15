var app = app || {};

(function ($) {
	app.TabView = Backbone.View.extend({
		tagName: 'div',
		
		template: _.template($('#tab-template').html()),
		
		events: {
		},

		initialize: function () {
			this.$header = $('#header');
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'visible', this.toggleVisible);
			this.render();
		},

		// 渲染 底部的4个tab
		render: function () {
			var modelActive = this.model.get('active');
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.find('a').toggleClass('active', modelActive);
			$(this.model.get('pageId')).toggleClass('active', modelActive);
			if(modelActive) {
				this.$header.find('h1').text(this.model.get('title'));
				$('title').text(this.model.get('title') + ' - 英语流利说');
			}
			return this;
		}, 
		
		toggleVisible: function() {
			var activeTab = app.Tabs.getActive();
			activeTab.filter(function(tab) {
				tab.set('active', false);
			});
			this.model.set('active', true);
		}
	});
})(Zepto);
