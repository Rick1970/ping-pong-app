// user interface logic here.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();


    // business interface logic here.


    var inputNum = $("input#number").val();
    var inputNum2 = parseInt(inputNum);
    var list = "";

        for (var i = 1; i <= inputNum2; i ++) {
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
