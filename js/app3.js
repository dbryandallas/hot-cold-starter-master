
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* Creates the random number that users guess */

var answerNumber = function() {
			computerNumber = Math.floor(Math.random() * 101);
				console.log(computerNumber);
				return computerNumber;
	};

	answerNumber();


/* Creates a counter to keep track of guesses */

var counter = 0;
	var counting = function(){
  		counter += 1;
   		$('#count').replaceWith("<span id='count'>" + counter + "</span>");
  	};


/* feedback loops */

	function gamePlay() { 

		var guessNumber = $("#userGuess").val();
			console.log(guessNumber);	

		computerNumber;

		var guessChecker = (Math.abs(guessNumber - computerNumber));
			console.log(guessChecker);


		if(guessChecker === 0) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
			//$("body").css("background-image", "url(http://www.getentrepreneurial.com/images2/winner-win.jpg)");
		}

		else if(guessChecker >= 30 && guessChecker <=49) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
			//$("body").css("background-image", "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQr5Yud8XiYYpLIHMSZgbZus9pQPWZ7m45DTBA1T5CsIhreGPVFyw)");
		}

		else if(guessChecker >= 20 && guessChecker <=29) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
			//$("body").css("background-image", "url(http://studiobrow.files.wordpress.com/2011/12/warm.jpg)");
		}

		else if(guessChecker >= 10 && guessChecker <=19) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
			//$("body").css("background-image", "url(http://www.journeyindiana.com/wp-content/uploads/2014/06/042208-handbystove.jpg)");
		}

		else if(guessChecker >= 1 && guessChecker <=9) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
			//$("body").css("background-image", "url(http://3.bp.blogspot.com/-xfiYtUKNcz4/Usjfzq9JUwI/AAAAAAAAAP8/Gzz5I6fZhEs/s1600/man-on-fire-burning.jpg)")
		}

		else {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
			//$("body").css("background-image", "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6HmJaGC08o0Kajxw67ZAF8-VEIO2WeeDFOde4BXsiYaHP7DQszQ8BJHBx)");
		}

	};


	/* When you click guess button it registers it */

	$("#guessButton").on("click", function(){
		
		event.preventDefault();

		var guessNumber = $("#userGuess").val();
			if(guessNumber > 1 && guessNumber < 101) {
				$("#guessList").append("<li>" + guessNumber + "</li>");
				gamePlay();
				counting();
			} else {
			alert("Not a valid number, try again!")
			}
			$("#userGuess").val(" ");
		
	}); 


/* restarting a game */
	$(".new").on("click", function() {
		$("#guessList").empty();
		answerNumber();
		var counter = 0;
		$("#feedback").replaceWith("<h2 id='feedback'>" + "Make your Guess!" + "</h2>");
		$('#count').replaceWith("<span id='count'>" + 0 + "</span>");
		$("body").css('background-image', "url(http://painprotherapeutics.com/wp-content/uploads/2013/11/hot-and-cold.jpg)");

	})


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
