App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function(){
	this.resource('posts', function () {
		this.resource('post', { path: ':post_id' });
	});
	this.resource('about');
	this.resource('contact');
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return App.Post.find();
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	edit: function(){
		this.set('isEditing', true);
	},
	doneEdit: function(){
		this.set('isEditing', false);
	}
});

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	publishedAt: DS.attr('date')
});

App.Post.FIXTURES = [{
		id: 1,
		title: 'title 1',
		author: 'Doron Segal',
		publishedAt: new Date('1-1-2014'),
		intro: "intro 1111 intro 1111 intro 1111 intro 1111 intro 1111 ",
		extended: "extended 1111 extended 1111extended 1111extended 1111extended 1111extended 1111extended 1111extended 1111"
	},{
		id: 2,
		title: 'title 2',
		author: 'Doron Segal',
		publishedAt: new Date('1-2-2014'),
		intro: "intro 2222 intro 2222 intro 22222 intro 2222 intro 2222 ",
		extended: "extended 2222 extended extended 2222 extended extended 2222 extended extended 2222 extended extended 2222 extended "
	},{
		id: 3,
		title: 'title 3',
		author: 'Doron Segal',
		publishedAt: new Date('1-3-2014'),
		intro: "intro 33333 intro 33333intro 33333intro 33333intro 33333intro 33333intro 33333",
		extended: "extended 3333 extended 3333 extended 3333extended 3333extended 3333 extended 3333extended 3333extended 3333extended 3333extended 3333extended 3333"
	}];

Ember.Handlebars.registerBoundHelper('from_now_date', function(date){
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(input){
	return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});