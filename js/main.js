/*----variables----*/

var compPattern = [];
var playPattern = [];
var round = 0;


/*----event listeners-----*/

document.getElementById('cell1')
  .addEventListener('click', handleClick1);

document.getElementById('cell2')
  .addEventListener('click', handleClick2);

document.getElementById('cell3')
  .addEventListener('click', handleClick3);

document.getElementById('cell4')
  .addEventListener('click', handleClick4);



function handleClick1 () {
  var red = 1;
  playPattern.push(red);
  compare();
};

function handleClick2 () {
  var blue = 2;
  playPattern.push(blue);
};

function handleClick3 () {
  var green = 3;
  playPattern.push(green);
};

function handleClick4 () {
  var yellow = 4;
  playPattern.push(yellow);
};


//adds random number to compter's array//
function cTurn() {
  var random = Math.floor(Math.random()*4+1);
  compPattern.push(random);
  playPattern = [];
}

//adds number to player's array//
function pTurn() {
  var choice =
  playPattern.push(choice);
}

//start game function
function startGame() {
  compPattern = [];
  playPattern = [];
  round = 0;
  roundStart();
}

//keeps track of round
function roundCounter() {
  document.getElementById('round').innerHTML = compPattern.length;
}

//plays computer's array
function playbackComputer() {
  var i = 0;

}

//compare arrays
function compare() {
  for(var i = 0; i < playPattern.length; i++) {
    if(compPattern[i] !=playPattern[i]) {
      over();
    }
  } if(compPattern.length == playPattern.length) {
    cTurn();
  }
}

function over(){
  alert("WRONG!");
}

