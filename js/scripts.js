$(document).ready(function(){
  $("#form1").submit(function(event){
    var fullname = $("#fullname").val();
    var firstLetterCaps = fullname.charAt(0).toUpperCase() + fullname.slice(1);

    $(".fullname").text(firstLetterCaps);

    $("#letter").show(500);
    event.preventDefault();
  });//end submit
});//end ready event
