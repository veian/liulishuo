var app = app || {};

(function ($) {
	app.TabView = Backbone.View.extend({
		el:  '#bottom-nav',
		
		template: _.template($('#tab-template').html()),

		events: {
			'click a': 'switch'
		},

		initialize: function () {
			this.render();
		},

		render: function () {
			if(this.model.active) {
				new LeaderboardView();
			}
			this.$el.append(this.template(this.model.toJSON()));
		}
	});
})(Zepto);
