/**
 * Returns an Object describing the instance's status
 *
 * @method status
 * @public
 * @return {Object} Status
 */
TurtleIO.prototype.status = function () {
	var ram    = process.memoryUsage(),
	    uptime = process.uptime(),
	    state  = {config: {}, process: {}, server: {}};

	// Startup parameters
	$.iterate( this.config, function ( v, k ) {
		state.config[k] = v;
	} );

	// Process information
	state.process = {
		memory : ram,
		pid    : process.pid
	};

	// Server information
	state.server = {
		address     : this.server.address(),
		uptime      : uptime
	};

	return state;
};
