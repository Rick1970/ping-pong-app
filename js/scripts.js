// jQuery user interface logic here.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var test = document.getElementById("ping-pong");
    var test2 = test.elements[0].value;
    var list = "";
    var input = $("input#number").val();
    parseInt(input);
        for (var i = 1; i <= test2; i ++) {
          list += "<li>";
          if ((i % 3 === 0) && (i % 5 === 0)){
            list += "<b>ping-pong</b>"
          }
          else if ((i % 3 === 0) && (i % 5 !== 0)){
           list += "<b>ping</b>";
         }
          else if ((i % 5 === 0) && (i % 3 !== 0)){
            list += "<b>pong</b>"
                    }
          else {
           list += i;
        }
          list += "</li>";
    };
         document.getElementById("results").innerHTML = list;
  });
});
