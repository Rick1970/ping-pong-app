// jQuery user interface logic here.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var input = $("input#number").val();
    parseInt(input);
    // input.split();
    for (var counter = 0; counter < input; counter ++) {
    $("#final").append("<li>" + counter +"</li>");

    }
  });
});
