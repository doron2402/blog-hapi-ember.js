module.exports = function(args){
	
	this.development = {
		port: args.port || 5000,
		mode: 'development',
		host: 'localhost',
		mongodb: {
			host: 'mongodb://localhost/test'
		}
	};
	this.production = {
		port: args.port || 4000,
		mode: 'production',
		host: 'localhost'
	};

	return this[args.name];
}
