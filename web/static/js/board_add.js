$(function() {

  $('#board-form').submit(function(e){
    var jwt_token = document.querySelector('meta[name="guardian_token"]').content;
    e.preventDefault();
    $(this).find('input[type=submit]').attr('disabled', true);
    if($("#contact_name").val() != ""){
      var user_id = $("#user_id").val();
      var company_id = $("#company_id").val();
      var board_column = $("#board_column").val();
      $.ajax('/api/v2/board', {
        method: 'POST',
        headers: {"Authorization": "Bearer "+jwt_token},
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function(result){
          var contact_id = result.data.id;
          window.location = "/board/" + contact_id;
        }
      });
    }else{
      $(this).find('input[type=submit]').removeAttr('disabled');  
      alert("Name can't be blank");
    }
  });
});