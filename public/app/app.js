App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: DS.RESTAdapter.extend({
		url: 'http://localhost:5000/api'
	})
});

App.Router.map(function(){
	this.resource('posts', function () {
		this.resource('post', { path: ':post_id' });
	});
	this.resource('about');
	this.resource('contact');
});

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('posts');
	}
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
		this.get('store').commit();
	}
});
App.ContactController = Ember.Controller.extend({
	selectedReffer: 'Google',
	reffers: ['Other','Google','linkedin','facebook','github']
});

App.ContactView =  Ember.View.extend({
	templateName: 'contact-me-view',

    actions: {
      submit: function(event) {
        console.log(this.get('message'));
        console.log(this.get('email'));
        console.log(this.get('phone'));
        console.log(this.get('fullname'));
        console.log(this.get('site'));
        console.log(this.get('selectedReffer'));
      },
        clear: function(event) {
        console.log('clear');
            this.set('message','');
        }
    }
});


App.Contact = DS.Model.extend({
	name: DS.attr('string'),
	phone: DS.attr('string'),
	email: DS.attr('email'),
	message: DS.attr('string'),
	contactAt: DS.attr('date')
});

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	publishedAt: DS.attr('date')
});

Ember.Handlebars.registerBoundHelper('from_now_date', function(date){
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(input){
	return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});