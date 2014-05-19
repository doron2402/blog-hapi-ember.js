var Site = {};

//MAIN PAGE
Site.main = {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {

        var context = {
            title: 'Doron Segal - Official Blog (Node.js & Ember.js)',
            message: 'I love JS',
            mode: dblog.settings.mode
        };

        return reply.view('index', context);
    }
};
//Access to public js and css library
Site.public = {
    method: 'GET',
    path: '/public/{path*}',
    handler: {
        directory: {
            path: './public',
            listing: false,
            index: true
        }
    }
};

//api call for about data
Site.api_about = {
	method: 'GET',
	path: '/api/pages/about',
    config: {
        handler: function(request, reply) {
            var obj_response = {
                Error: null,
                code: 'OK',
                response: {
                	header: 'about my',
                	body: '<p>bla bla</p>'
                }
            };
            reply(obj_response).type('application/json');
        }
    }
};

module.exports = Site;