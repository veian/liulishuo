var app = app || {};

$(function () {
	new app.AppView();
	Backbone.history.start();
});