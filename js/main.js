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
  displayColors();
}



//function highlight() {
//  if (random === 1) {
//    document.getElementById('cell1').setAttribute("style", "opacity: 1");
//  } else if (random === 2) {
//    document.getElementById('cell2').setAttribute("style", "opacity: 1");
//  } else if (random === 3) {
//    document.getElementById('cell3').setAttribute("style", "opacity: 1");
//  } else if (random === 4) {
//    document.getElementById('cell4').setAttribute("style", "opacity: 1");
//  }
//}


function unHighlight() {
    for(var i = 0; i < compPattern.length; i++) {
     if (compPattern[i] === 1)  {
      document.getElementById('cell1').removeAttribute("style", "opacity: 1");
      } else if (compPattern[i] === 2) {
          document.getElementById('cell2').removeAttribute("style", "opacity: 1");
        } else if (compPattern[i] === 3) {
          document.getElementById('cell3').removeAttribute("style", "opacity: 1");
        } else if (compPattern[i] === 4) {
          document.getElementById('cell4').removeAttribute("style", "opacity: 1");
        }
      }
  }




// timer variables
var tickResolution = 500;
var ticksPerColor = 2;
var ticksBetween = 1;
var timerId;
 var random = Math.floor(Math.random()*4+1);

// elements
var display = document.getElementById('cell4');


// helper functions
function displayColors() {
  var colorIdx = 0;
  var tickCount = 0;
  timerId = setInterval(handleTick, tickResolution);
  function handleTick() {
    var showTick = colorIdx * (ticksBetween + ticksPerColor);
    var hideTick = ticksPerColor + colorIdx * (ticksBetween + ticksPerColor);
    if (tickCount ===  showTick) {
   if (compPattern[colorIdx] === 1)  {
    document.getElementById('cell1').setAttribute("style", "opacity: 1");
    } else if (compPattern[colorIdx] === 2) {
        document.getElementById('cell2').setAttribute("style", "opacity: 1");
      } else if (compPattern[colorIdx] === 3) {
        document.getElementById('cell3').setAttribute("style", "opacity: 1");
      } else if (compPattern[colorIdx] === 4) {
        document.getElementById('cell4').setAttribute("style", "opacity: 1");
      }
    };
    if (tickCount ===  hideTick) {
      //display.innerHTML = '';
      unHighlight();
      colorIdx++;
      if (colorIdx === compPattern.length) clearInterval(timerId);
    }
    tickCount++;
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
   if (compPattern[i] === 1)  {
    document.getElementById('cell1').setAttribute("style", "opacity: 1");
    } else if (compPattern[i] === 2) {
        document.getElementById('cell2').setAttribute("style", "opacity: 1");
      } else if (compPattern[i] === 3) {
        document.getElementById('cell3').setAttribute("style", "opacity: 1");
      } else if (compPattern[i] === 4) {
        document.getElementById('cell4').setAttribute("style", "opacity: 1");
      }
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
//function light() {





