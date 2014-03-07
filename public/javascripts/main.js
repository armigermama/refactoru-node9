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



});