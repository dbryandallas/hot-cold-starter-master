$(document).ready(function(){

	/* display Modal box */

     $( ".what" ).click(function(){
       $(".overlay").fadeIn(1500)

     });

      /* hide modal box */

     $("a.close").click(function(){
     	$(".overlay").fadeout(1500)

     });

     /* Creates the random number that users guess */

    var answerNumber = function() {
         randomNumberBetween0and100 = Math.floor(Math.random() * 100);
             console.log(randomNumberBetween0and100);
             return randomNumberBetween0and100;
     };

     answerNumber();
     

  // Only change code below this line.

  return Math.random();
}



