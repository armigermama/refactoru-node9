module.exports = {

	redirect: function(req, res) {
		res.redirect('/translate');
	},

	translate: function(req, res) {
		res.render('translate', {title: 'Lingo'});
	}

}