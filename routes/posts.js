
var Posts = {};

Posts.posts = [{
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

Posts.get_all_posts = {
	method: 'GET',
	path: '/api/posts',
    config: {
        handler: function(request, reply) {
            var obj_response = {
                posts: Posts.posts
            };
            reply(obj_response).type('application/json');
        }
    }
};

//Return post by id
Posts.get_post_by_id = {

};

Posts.update_post = {
	method: 'PUT',
	path: '/api/posts/{id}',
	config: {
		handler: function(request, reply) {
			console.log(request.payload);
			reply({code: 'Ok'}).type('application/json');
		}
	}
};

Posts.most_viewed_post = {

};

module.exports = Posts;