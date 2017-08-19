
//Timer
var countDown = document.getElementById("timer")
var counter = 30;
var newElement = document.createElement("duration");
newElement.innerHTML = "30";
console.log("30 seconds");

var id;
countDown.parentNode.replaceChild(newElement,countDown);
id = setInterval(function() {
	
		console.log("duration function")
		counter--;
		if(counter===0) {
			console.log("counter function")

			setTimeout(function(){
				$("#questions").hide();
				$("#results-screen").show();
			}, 1000); //close setTimeout function 2 secs

		}//end counter = 0

		if(counter < 0) {
			console.log("clear function")
			newElement.parentNode.replaceChild(countDown,newElement);
			clearInterval(id);
		} else {
			newElement.innerHTML = counter.toString();
		} 
	}, 1000); //close setInterval function 3 secs

//Game
var numberCorrect = 0;
var numberWrong = 0;
var numberUnanswered = 0;
var answer;
var updateadd;
var gamesequence;
/////var playerAnswer;


var answer = function(){
	$('.q1d').val();
	$('.q2d').val();
	$('.q3c').val();
	$('.q4b').val();
	$('.q5b').val();
	$('.q6a').val();
	$('.q7b').val();
	$('.q8d').val();
console.log(answer);
}

var updateadd = function(){
	console.log("html updating w/updated add?");
	$('#number-correct').empty(); //empty() method removes all child nodes and content from the selected elements.
	$('#number-correct').append(numberCorrect); //method inserts specified content at the end of the selected elements.
	$('#number-wrong').empty();
	$('#number-wrong').append(numberWrong);
	$('#number-no-answer').empty();
	$('#number-no-answer').append(numberUnanswered);
}

//Game sequence - playerAnswer

var gamesequence = function(){
if(answer === "wrong"){
	numberWrong = numberWrong + 1;
	updateadd();

	//add to the screen

} else if (answer === undefined){
	numberUnanswered = numberUnanswered +1;
	updateadd();
	//add to the screen

}else{
	numberCorrect = numberCorrect+1;
	updateadd();
	//add to the screen
}

}//closes game sequence

//$("#number-correct").html(numberCorrect);
//$("#number-wrong").html(numberWrong);
//$("#number-no-answer").html(numberUnanswered);

//click events for 8 questions

$(document).ready(function(){

$('#question1').click(function(){
	console.log("player inputs question1 answer")
	gamesequence();
	})//q1 click event ends
$('#question2').click(function(){
	console.log("player inputs question2 answer")
	gamesequence();
	})//q2 click event ends

$('#question3').click(function(){
	console.log("player inputs question 3 answer")
	gamesequence();
	})//q3 click event ends

$('#question4').click(function(){
	console.log("player inputs question4 answer")
	gamesequence();
	})//q4 click event ends

$('#question5').click(function(){
	console.log("player inputs question5 answer")
	gamesequence();
	})//q5 click event ends

$('#question6').click(function(){
	console.log("player inputs question6 answer")
	gamesequence();
	})//q6 click event ends

$('#question7').click(function(){
	console.log("player inputs question7 answer")
	gamesequence();
	})//q6 click event ends

$('#question8').click(function(){
	console.log("player nputs question8 answer")
	gamesequence();
})//Q8 click event ends, register answer, sort it, and tally up



})//docreadyfunction close

//start page
$("#questions").hide();
$("#results-screen").hide();
$("#start").click(function(){
	$("#start").hide();
	$("#questions").show();
});

//finish page
$("#finish").click(function(){
	$("#questions").hide();
	$("#results-screen").show();
});


