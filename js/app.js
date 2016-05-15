$(document).ready(function(){
  newGame();
}

/*display modal box*/

$(".what").click(function(){
  (".overlay").fadeIn(1000);

});

/*hide box*/

$("a.close").click(function(){
  (".overlay").fadeOut(1000);
});

/*new game*/
$("a.new").click(function(){
  newGame();
});

/*generate random number between 1-100*/

function getSecretNumber() {
        return Math.floor((Math.random() * 100) + 1);
}