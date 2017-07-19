// alert("you are connected!");
//variables
var trivia;
var answers;
var intervalId;
var clockRunning = false;

//JSON
var trivia = [
	question1 = {
		question: "Which NBA team won 6 championships in the 90's?",
		answers: ["Bulls", "Lakers", "Rockets", "Jazz"],
		correctAnswer: 0
	},
	question2 = {
		question: "This NFL team is in the AFC, and has won 6 Superbowls.",
		answers: ["Cowboys", "Broncos", "Steelers", "Colts"],
		correctAnswer: 2
	},
	question3 = {
		question: "Which NCAA football team was the first to win Playoff series National Championship?",
		answers: ["Buckeyes", "Crimson Tide", "Ducks", "Tigers"],
		correctAnswer: 1
	},
];

//functions and objects


//On-click start game
$("#startBtn").on("click", function(){
	//show timer
		
	//start timer
	Timer();
	countDown();
	//when time is up end the game
	//display timer

	//display questions
	$("#game").html("<p>" + "question goes here" + "</p>");
	//display answers with radio buttons
//logic: player chooses answers but can't choose more than one per question

	//if answer is correct i++ for correct category
	//else if answer incorrect i++ for incorrect category
});
//timer logic
	var time = 3;
	function Timer() {
		intervalId = setInterval(countDown, 1000);
	};
	function countDown(){
		time--;
		$("#display").html(time + " seconds remaining")
		if (time === 0) {
			clearInterval(intervalId);
			document.getElementById('display').style.color = 'red';
			$("#display").html("<h1>" + "YOUR TIME IS UP!" + "</h1>");
			showResults();
		}
	};