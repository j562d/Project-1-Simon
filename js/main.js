/*----variables----*/

var compPattern = [];
var playPattern = [];
var round = 0;
var startBtn = document.querySelector('button');
//var element = document.getElementsByClassName("cells");


/*----event listeners-----*/

document.getElementById('cell1')
  .addEventListener('click', handleClickRed);

document.getElementById('cell2')
  .addEventListener('click', handleClickBlue);

document.getElementById('cell3')
  .addEventListener('click', handleClickGreen);

document.getElementById('cell4')
  .addEventListener('click', handleClickYellow);

startBtn.addEventListener('click', startGame);


/*----functions-----*/

//click Red
function handleClickRed () {
  var red = 1;
  playPattern.push(red);
  compare();
};

//click Blue
function handleClickBlue () {
  var blue = 2;
  playPattern.push(blue);
  compare();
};

//click Green
function handleClickGreen () {
  var green = 3;
  playPattern.push(green);
  compare();
};

//click Yellow
function handleClickYellow () {
  var yellow = 4;
  playPattern.push(yellow);
  compare();
};


//adds random number to compter's array//
function compTurn() {
  var random = Math.floor(Math.random()*4+1);
  compPattern.push(random);
  playPattern = [];
  roundCounter();

  if (random === 1) {
    document.getElementById('cell1').setAttribute("style", "opacity: 1");
  } else if (random === 2) {
    document.getElementById('cell2').setAttribute("style", "opacity: 1");
  } else if (random === 3) {
    document.getElementById('cell3').setAttribute("style", "opacity: 1");
  } else if (random === 4) {
    document.getElementById('cell4').setAttribute("style", "opacity: 1");
  }
}

//adds number to player's array//
//function pTurn() {
//  var choice =
//  playPattern.push(choice);
//}

//start game function
function startGame() {
  compPattern = [];
  playPattern = [];
  compTurn();
}

//keeps track of round
function roundCounter() {
  document.getElementById('round').innerHTML = compPattern.length;
}

//plays computer's array
function playbackComputer() {
  for(var i = 0; i < compPattern.length; i++) {
    console.log(compPattern[i]);
  }
}


//compare arrays
function compare() {
  for(var i = 0; i < playPattern.length; i++) {
    if(compPattern[i] !=playPattern[i]) {
      over();
    }
  } if(compPattern.length == playPattern.length) {
    compTurn();
  }
}

//game over
function over(){
  alert("WRONG!");
  compPattern = [];
  startGame();
}

//light up
function light() {

}



