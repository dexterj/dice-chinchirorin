// written by Dexter Jacobs http://www.dexterjacobs.com 
// functions that are on load and starting the game are located at the bottom of this doc

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - DICE DEFINITIONS 
var die1 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
}
var die2 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
}
var die3 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
}
var die4 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
}
var die5 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
}
var die6 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(40,40,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,30,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,15,5,0,2*Math.PI);
	ctx.fill();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - GAME FUNCTIONS

var replaceById = function(x,y){
	document.getElementById(x).innerHTML=y;
}

var swapButton = function(){
	if ($("#replay").hasClass("gone")){
    	$("#play").addClass("gone");
		$("#replay").removeClass("gone");
	}
	else {
		$("#replay").addClass("gone");
		$("#play").removeClass("gone");
		dice = [];
		score = [];
		//replaceById("winner-winner","")
		replaceById("score-a",0);
		replaceById("score-b",0);
		

		$("#result").slideUp("slow");
		for (var i = 1; i <= 6; i++) {
			die6('dice'+i);
		}
	};
}
var displayScore = function(){
	replaceById("user-credits", credits);
	var scoreA = score[0];
	var scoreB = score[1];
	if (score[0] == "undefined"){
		replaceById("score-a",0);
		replaceById("score-b",0);	
	}
	else {
		replaceById("score-a",scoreA);
		replaceById("score-b",scoreB);
	};
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - DECLARE WINNER 

var alertPlayerA = function(){
	displayScore();
	replaceById("winner-winner","The Bank Wins.")
	$("#result").slideDown("slow");
}
var alertPlayerB = function(){
	displayScore();
	replaceById("winner-winner","You win!")
	$("#result").slideDown("slow");
}
var alertDraw = function(){
	displayScore();
	replaceById("winner-winner","It's a draw.")
	$("#result").slideDown("slow");
}
var playerWinsTriple = function(){
	credits = (credits + (theBet * 3));
}
var	playerWinsDouble = function(){
	credits = (credits + (theBet * 2));
}
var playerWinsSingle = function(){
	credits = (credits + (theBet * 1));
}
var playerLosesTriple = function(){
	credits = (credits - (theBet * 3));
	ifNeg();
}
var playerLosesDouble = function(){
	credits = (credits - (theBet * 2));
	ifNeg();
} 
var playerLosesSingle = function(){
	credits = (credits - (theBet * 1));
	ifNeg();
}
var ifNeg = function(){
	if (credits <= 0)
		credits = 0;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - CHECK DICE FOR WINNER

var checkForTriples = function(){
	// Bank rolls
	if (dice[0] == 1 && dice[1] == 1 && dice[2] == 1){
		score.push("ONES");
		score.push("-");
		playerWinsTriple();
		return(alertPlayerB());
	}else if (dice[0] == dice[1] && dice[0] == dice[2]){
		score.push("STORM");
		score.push("-");
		playerLosesTriple();
		return(alertPlayerA());
	}else if (dice[0] == 4 && dice[1] == 5 && dice[2] == 6
		  || dice[1] == 4 && dice[2] == 5 && dice[0] == 6
		  || dice[2] == 4 && dice[0] == 5 && dice[1] == 6){
		score.push("4 - 5 - 6");
		score.push("-");
		playerLosesDouble();
		return(alertPlayerA());
	}else if (dice[0] == 1 && dice[1] == 2 && dice[2] == 3
		  || dice[1] == 1 && dice[2] == 2 && dice[0] == 3
		  || dice[2] == 1 && dice[0] == 2 && dice[1] == 3){
		score.push("1 - 2 - 3");
		score.push("STRAIGHT");
		playerWinsDouble();
		return(alertPlayerB());
	// Player rolls
	}else if (dice[3] == 1 && dice[4] == 1 && dice[5] == 1){
		score = [];
		score.push("-");
		score.push("ONES");
		playerLosesTriple();
		return(alertPlayerA());
	}else if (dice[3] == dice[4] && dice[3] == dice[5]){
		score = [];
		score.push("-");
		score.push("STORM");
		playerWinsTriple();
		return(alertPlayerB());
	}else if (dice[3] == 1 && dice[4] == 2 && dice[5] == 3
		  || dice[4] == 1 && dice[5] == 2 && dice[3] == 3
		  || dice[5] == 1 && dice[3] == 2 && dice[4] == 3){
		score = [];
		score.push("-");
		score.push("1 - 2 - 3");
		playerLosesDouble();
		return(alertPlayerA());
	}else if (dice[3] == 4 && dice[4] == 5 && dice[5] == 6
		  || dice[4] == 4 && dice[5] == 5 && dice[3] == 6
		  || dice[5] == 4 && dice[3] == 5 && dice[4] == 6){
		score = [];
		score.push("-");
		score.push("4 - 5 - 6");
		playerWinsDouble();
		return(alertPlayerB());
	}else checkForDoublesA();
}
var checkForDoublesA = function(){
	if (dice[0] == dice[1])
		score.push(dice[2]);
	else if (dice[0] == dice[2])
		score.push(dice[1]);
	else if (dice[1] == dice[2])
		score.push(dice[0]);
	else score.push(0);
	checkForDoublesB();
}
var checkForDoublesB = function(){	
	if (dice[3] == dice[4])
		score.push(dice[5]);
	else if (dice[3] == dice[5])
		score.push(dice[4]);
	else if (dice[4] == dice[5])
		score.push(dice[3]);
	else score.push(0);
	checkScore();
}
var checkScore = function(){
	if (score[0] > score[1]){
		playerLosesSingle();
		alertPlayerA();
	}else if (score[1] > score[0]){
		playerWinsSingle();
		alertPlayerB();
	}else alertDraw();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - THROW DICE

var throwDice = function(num){
	console.log(num);
	dice = [];
	for (var i = 1; i <= 6; i++) {
		j=i;
		var r = Math.random()*6;
			x = Math.floor(r)+1;
			window['die'+x] ('dice'+j);
			dice.push(x);
	};
	if (num >= 0){
		setTimeout(function(){
			throwDice(num-1);
		}, 17*20/(num^3));
	}else{
		makeBet();
		swapButton();
		checkForTriples();
	}
}

var playGame = function(){
	throwDice(20);	
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RESET GAME

var resetGame = function(){
	for (var i = 1; i <= 6; i++) {
		document.getElementById("dice"+i).innerHTML='?';

	};
	swapButton();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SET THE BET / DISPLAY CREDITS

betting = function() {
   var el, newPoint, newPlace, offset;
   $("input[type='range']").change(function() {
     el = $(this);
     $(".output").text(el.val());
     el.attr("max", credits);
     width = el.width();
     newPoint = (el.val() - 1) / (credits - 1);
     offset = -1.3;
     if (newPoint < 0) { newPlace = 0;  }
     else if (newPoint > 1) { newPlace = width; }
     else { newPlace = width * newPoint + offset; offset -= newPoint;}
     
   })
   .trigger('change');

 };

var displayCredits = function(){
	document.getElementById("user-credits").innerHTML=credits;
}

var makeBet= function(){
	theBet = $('#the-bet').text();
	console.log(theBet);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - RULES TOGGLE

var showRules = function(){
	$("#rules").slideToggle(1000, "swing")
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - DEFINE DICE / SCORE / CREDITS

var dice = [];
var score = [];
credits = 20;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ON LOAD / ON CLICK

for (var i = 1; i <= 6; i++) {
			die6('dice'+i);
}
displayCredits();
betting();
$("#play").on("click", playGame);
$("#replay").on("click", resetGame);
$(".toggle-rules").on("click", showRules);

