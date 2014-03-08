$(function(){

// JS for tralnation app:
// on-submit event handling to trigger ajax to send/receive data and generate DOM element

  $('#translate-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: '/translate',
      data: $('#translate-form').serialize(),

      success: function(data) {
        console.log('data', data);

        if (data.translation) {
          $('#translation-result').empty().text(data.translation);
        } else {
          $('#translation-result').empty().text("Sorry, we cannot find a translation for your word.");
        }
      }

    });
  });

// JS for quiz app:
// on-submit event handling for the first page of quiz:
// it should take the object from server to render quiz
// and hide the quiz questionaire jumbotron

  $('#quiz-index-form').submit(function(e) {
    e.preventDefault();

    $.ajex({
      type: "POST",
      url: '/quiz',
      data: $('#quiz-index-form').serialize(),

      success: function(data) {
        console.log('ajax data: ', data);
      }
    });

  });


});