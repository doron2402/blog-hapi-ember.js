var Contact = {};

Contact.form_submit = {
    method: 'POST',
    path: '/contact',
    handler: function(request, reply) {
        var obj_response = {
            err: null,
            code: 'OK',
            message: 'Saved'
        }
        //Save contact info
        
        //Return Saved
        return reply(obj_response).type('application/json');
    }
};

module.exports = Contact;