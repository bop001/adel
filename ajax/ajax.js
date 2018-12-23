$(document).ready(function(){

 $("#btn-designer").click(
    function(){
      sendAjaxForm('result_form', 'ajax_form', '../php/call_disigner.php');
      $('#ajax_form').value();
       return false; 
    }
  );
 $("#btn-callback").click(
    function(){
      sendAjaxForm('result_form', 'callback', '../php/callback.php');
      $('#ajax_form').value();
       return false; 
    }
  );

function sendAjaxForm(result_form, ajax_form, url) {
      $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html",
        data: $("#" + ajax_form).serialize(), 
        success: function(response) { 
          result = $.parseJSON(response);
          $('#result_form').html('Имя: ' + result.name+'<br>Телефон: ' + result.phonenumber);
      },
      error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
      }
  });
}

});

