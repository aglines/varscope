$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    console.log(nameInput);

    $(".classname").text(nameInput);

    $("#story").show();

    event.preventDefault();
  });


});
