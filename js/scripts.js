$(document).ready(function() {

  $("#shoutForm").submit(function(event) {
    var inputRaw = $("input#userInput").val();
    var inputFixed = inputRaw.toUpperCase();
    console.log(inputRaw);
    console.log(inputFixed);

    $(".classname").text(inputFixed);

    $("#story").show();

    event.preventDefault();
  });


});
