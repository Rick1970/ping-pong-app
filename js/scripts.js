// user interface logic here.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();


    // business interface logic here.

    var input = document.getElementById("ping-pong");
    // var test = $("form#ping-pong").val();
    // var test2 = parseInt(test);
    // var test3 = test2.split();
    var input2 = input.elements[0].value;
    var list = "";
    // var input = $("input#number").val();
    // parseInt(input);
        for (var i = 1; i <= input2; i ++) {
          list += "<li>";
          if ((i % 3 === 0) && (i % 5 === 0)){
            list += "<i>ping-pong</i>"
          }
          else if ((i % 3 === 0) && (i % 5 !== 0)){
           list += "<i>ping</i>";
         }
          else if ((i % 5 === 0) && (i % 3 !== 0)){
            list += "<i>pong</i>"
                    }
          else {
           list += i;
        }
          list += "</li>";
    };
         document.getElementById("results").innerHTML = list;
  });
});
