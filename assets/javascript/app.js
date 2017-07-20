// alert("you are connected!");
//variables
var trivia;
var answers;
var intervalId;
var time = 15;
var correct = 0;
var incorrect = 0;

//JSON
var trivia = [
	{
		question: "Which NBA team won 6 championships in the 90's?",
		answers: ["Bulls", "Lakers", "Rockets", "Jazz"],
		correctAnswer: 0
	},
	{
		question: "This NFL team is in the AFC, and has won 6 Superbowls.",
		answers: ["Cowboys", "Broncos", "Steelers", "Colts"],
		correctAnswer: 2
	},
	{
		question: "Which NCAA football team was the first to win Playoff series National Championship?",
		answers: ["Buckeyes", "Crimson Tide", "Ducks", "Tigers"],
		correctAnswer: 1
	},
];

//functions and objects
//timer logic
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

//display questions
function displayQues(){
	for (var i = 0; i < trivia.length; i++) {
		console.log("hi")
		$("#game").append("<p>" + trivia[i].question + "</p>");
		displayAns(trivia[i]);
	}
};
	//display answers with radio buttons
function displayAns(obj){
		for (var j = 0; j < obj.answers.length; j++) {
			$("#game").append('<input type="radio" value= obj.answers[j])>' + obj.answers[j]);
			checkAns(obj.answers[j]);
		}
	};

//logic: player chooses answers but can't choose more than one per question

//compare chosen answers to correctAnswer
	//this wasn't working
function checkAns(obj){
	if (obj === obj.correctAnswer) {
		correct++;
	}else {
		incorrect++;
	}
};

//show results
function showResults(){
	$("#game").html(" ");
	$("#game").append("<p>" + "correct: " + correct + "</p>");
	$("#game").append("<p>" + "incorrect: " + incorrect + "</p>");
}


//On-click start game
$("#startBtn").on("click", function(){
	//start timer
	$("#game").html(" ");
	Timer();
	countDown();
	displayQues();
	//when time is up end the game
	//display timer


});
