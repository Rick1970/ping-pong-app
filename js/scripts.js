// jQuery user interface logic here.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var test = document.getElementById("ping-pong");
    var test2 = test.elements[0].value;
    var list = "";

    var input = $("input#number").val();
    parseInt(input);
        for (var i = 0; i < test2; i ++) {
          list += "<li>";
          if (i % 3 === 0){
           list += "<b>ping</b>";
         }
         else {
           list += i;
        }
          list += "</li>";

          // if (counter % === 3) {
          //
          //
          //
          //
          // }
    // $("#final").append("<li>" + i +"</li>");

    }
     document.getElementById("results").innerHTML = list;
  });
});
