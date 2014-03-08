var QuizModel = require('../models/quizModel.js');

module.exports = {

  index: function(req, res) {
    res.render('quizStart');
  },
  quizFinder: function(req, res) {
    req.body.quizLanguage
    res.render('quiz/detail');
  },
  quizDetail: function(req, res) {

  }

  

};