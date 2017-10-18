$(document).ready(function(){
  $("#form1").submit(function(event){
    var fullname = $("#fullname").val();

    $(".fullname").text(fullname);

    $("#letter").show(500);
    event.preventDefault();
  });//end submit
});//end ready event
