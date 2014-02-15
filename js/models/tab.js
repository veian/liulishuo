var app = app || {};

(function () {
	app.Tab = Backbone.Model.extend({
		defaults: {
			title: '',
			link: '',
			id: '',
			active: false
		}
	});
})();