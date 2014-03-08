var mongoose = require('mongoose');

var randomWords = require('random-words');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'JsDcwGYejKVlseFEPKBWsA%3D%3D'
});

var quizModel = module.exports = randomWords(10).map(function(word) {
  return {
    word: word, 
    translate: 
      beglobal.translations.translate(
        {text: word, from: })
      }
})

