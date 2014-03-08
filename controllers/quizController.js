var QuizModel = require('../models/quizModel.js');
var randomWords = (require('random-words'));
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'JsDcwGYejKVlseFEPKBWsA%3D%3D'
});

module.exports = {

  index: function(req, res) {
    res.render('quiz');
  },

  // The controller will generate a object with word and its translation
  // based on user's language selection.
  quizFinder: function(req, res) {

    var wordAndTranslate = { word: randomWords(), translate: ''};

    beglobal.translations.translate(
      {text: wordAndTranslate.word, from: 'eng', to: req.body.quizLanguage},

      function(err, results) {
        if (err) {
          res.send(err);
        }
        wordAndTranslate.translate = results.translation;
        res.send(wordAndTranslate);
        console.log('wordAndTranslate: ', wordAndTranslate);
      }

    );

  },
  quizDetail: function(req, res) {
   res.send('hello world');
  }


};