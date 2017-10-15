alert("you are connected!");
// variables
var trivia;
var answers;
var intervalId;
var counter;


//JSON
var trivia = [
	{
		question: "Which NBA team won 6 championships in the 90's?",
		answers: ["Bulls", "Lakers", "Rockets", "Jazz"],
		correctAnswer: "Bulls"
	},
	{
		question: "This NFL team is in the AFC, and has won 6 Superbowls.",
		answers: ["Cowboys", "Broncos", "Steelers", "Colts"],
		correctAnswer: "Steelers"
	},
	{
		question: "Which NCAA football team was the first to win Playoff series National Championship?",
		answers: ["Buckeyes", "Crimson Tide", "Oregon Ducks", "LSU Tigers"],
		correctAnswer: "Crimson Tide"
	},
	{
		question: "Which college basketball program did Chris Webber play for?",
		answers: ["North Carolina", "Crimson Tide", "Michigan", "LSU Tigers"],
		correctAnswer: "Michigan"
	},
];

// this object will keep track of correct and incorrect answers.
var game = {
	correct: 0,
	incorrect: 0,
	counter: 15,
	countDown: function(){
		// this line minuses 1 from the value of the variable 'time'
		game.counter--;
		// this line displays the value of the variable 'counter' plus that string in the
		// element ID display
		$("#display").html(game.counter + " seconds remaining")
		// this if statement says when 'counter' is equal to 0...
		// ...so every 1000 msec it will check if this is true.
		if (game.counter === 0) {
			// the text in the element ID display will turn red...
			document.getElementById('display').style.color = 'red';
			// ...element ID display will show in H1 format "YOUR TIME IS UP!"...
			$("#display").html("<h1>" + "YOUR TIME IS UP!" + "</h1>");
			console.log("your time is up!");
			// ...the function showResults will run
			game.results();
		}
	},
	start: function (){
		// timer logic
		// every 1000 milisec it will run the game.countDown function.
		timer = setInterval(game.countDown, 1000);
		console.log("timer is working");
		// this line removes the button from the page.
		$("#game").html(" ");
		// ...this line will run a for loop through the array 'trivia'...
		for (var i = 0; i < trivia.length; i++) {
			// ...it will log in the console "display questions" for each item in the array.
			console.log("display questions");
			// ...it will append in the element ID game each question property for each object in the array trivia
			$("#game").append("<h3>" + trivia[i].question + "</h3>");
			// ...below that it will run another for loop this time grabing the answers property in array trivia
			for (var j = 0; j < trivia[i].answers.length; j++) {
				// ...and it appends the answers with a radio button.
				// the name value of each answer is question-the number of the question 
				// and the value of value is the answer option.
				$("#game").append("<input type='radio' name='trivia-"+i+"' value='"+trivia[i].answers[j]+"'>"+trivia[i].answers[j]);
			}
		}
	},
	results: function(){
		// question 1
		// this line is looking at each answer option as if it were checked...
		$.each($("input[name='trivia-0']:checked"), function(){
			//...and it says if it were checked and it is equal to the
			// the correct answer  
			if($(this).val() == trivia[0].correctAnswer){
				// adds one to the "correct" variable...
				game.correct++;
			}else{
				// otherwise it would add one to the "incorrect" variable...
				game.incorrect++;
			}
		});
		// the rest of the questions have the same logic as the first.
		// question 2
		$.each($("input[name='trivia-1']:checked"), function(){
			if($(this).val() == trivia[1].correctAnswer){
				game.correct++;
			}else{
				game.incorrect++;
			}
		});
		// question 3
		$.each($("input[name='trivia-2']:checked"), function(){
			if($(this).val() == trivia[2].correctAnswer){
				game.correct++;
			}else{
				game.incorrect++;
			}
		});
		// question 4
		$.each($("input[name='trivia-3']:checked"), function(){
			if($(this).val() == trivia[3].correctAnswer){
				game.correct++;
			}else{
				game.incorrect++;
			}
		});
		// show results
		this.score();
	},
		score: function(){
			// ...the clearInterval function stops the timer...
			clearInterval(timer);
			$("#game").html(" ");
			$("#game").append("<p>" + "correct: " + game.correct + "</p>");
			$("#game").append("<p>" + "incorrect: " + game.incorrect + "</p>");
		}
};


//On-click start game
$("#startBtn").on("click", function(){
	//this start start function in the game object
	game.start();
});
