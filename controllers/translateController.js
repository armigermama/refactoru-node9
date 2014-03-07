var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'JsDcwGYejKVlseFEPKBWsA%3D%3D'
});


module.exports = {

	redirect: function(req, res) {
		res.redirect('/translate');
	},

	translate: function(req, res) {
		res.render('translate', {title: 'Lingo'});

	},

  detail: function(req, res) {
    console.log('detail')

    beglobal.translations.translate(
      {text: req.body.wordToTranslate, from: req.body.languageFrom, to: req.body.languageTo},

      function(err, results) {
        if (err) {
          res.send(err);
        }

        res.send(results);
      }
    );

  }

}