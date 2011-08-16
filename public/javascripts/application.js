// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
// ======================


console.log('dom loaded');

window.Place = Backbone.Model.extend({
	
	defaults: {
		name: 'empty',
		lat : 'empty',
		lng : 'empty'
	},
	
	initialize: {
		
	}
});

window.Places = Backbone.Collection.extend({
	
});


// ======================	
});
