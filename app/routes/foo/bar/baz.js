import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function () {
		console.log("this route seems to be working, but templates/foo/bar/baz/index.hbs and templates/foo/bar/baz/loading.hbs don't get used!"); // TODO: fix the bug!
		return new Ember.RSVP.Promise(function (resolve) {
			setTimeout(function () {
				resolve({ name: "baz" });
			}, 5000);
		});
	}
	
});
