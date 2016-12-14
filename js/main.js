/*----variables----*/

var compPattern = [];
var playPattern = [];
var round = 0;
var startBtn = document.querySelector('button');
var redBox = document.getElementById('cell1');
var blueBox = document.getElementById('cell2');
var greenBox = document.getElementById('cell3');
var yellowBox = document.getElementById('cell4');

//var element = document.getElementsByClassName("cells");

/*----event listeners-----*/

redBox.addEventListener('click', handleClickRed);

blueBox.addEventListener('click', handleClickBlue);

greenBox.addEventListener('click', handleClickGreen);

yellowBox.addEventListener('click', handleClickYellow);

startBtn.addEventListener('click', startGame);

redBox.addEventListener('click', playSound1);

blueBox.addEventListener('click', playSound2);

greenBox.addEventListener('click', playSound3);

yellowBox.addEventListener('click', playSound4);

redBox.addEventListener('mousedown', light1);
redBox.addEventListener('mouseup', lightOff1);

blueBox.addEventListener('mousedown', light2);
blueBox.addEventListener('mouseup', lightOff2);

greenBox.addEventListener('mousedown', light3);
greenBox.addEventListener('mouseup', lightOff3);

yellowBox.addEventListener('mousedown', light4);
yellowBox.addEventListener('mouseup', lightOff4);

/*----functions-----*/

function playSound1 () {
    document.getElementById('play1').play();
}

function playSound2 () {
    document.getElementById('play2').play();
}

function playSound3 () {
    document.getElementById('play3').play();
}

function playSound4 () {
    document.getElementById('play4').play();
}


//click Red
function handleClickRed () {
  //var red = 1;
  playPattern.push(1);
  compare();
};

//click Blue
function handleClickBlue () {
  //var blue = 2;
  playPattern.push(2);
  compare();
};

//click Green
function handleClickGreen () {
  //var green = 3;
  playPattern.push(3);
  compare();
};

//click Yellow
function handleClickYellow () {
  //var yellow = 4;
  playPattern.push(4);
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
var tickResolution = 350;
var ticksPerColor = 2;
var ticksBetween = 1;
var timerId;
 var random = Math.floor(Math.random()*4+1);

// elements


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
    playSound1();
    } else if (compPattern[colorIdx] === 2) {
        document.getElementById('cell2').setAttribute("style", "opacity: 1");
        playSound2();
      } else if (compPattern[colorIdx] === 3) {
        document.getElementById('cell3').setAttribute("style", "opacity: 1");
        playSound3();
      } else if (compPattern[colorIdx] === 4) {
        document.getElementById('cell4').setAttribute("style", "opacity: 1");
        playSound4();
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
  document.getElementById('losing').innerHTML="";
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
  //alert("WRONG!");
  document.getElementById('losing').innerHTML='Please try again';
  compPattern = [];
}

//light up
function light1() {
  redBox.setAttribute("style", "opacity:1");
}

function light2() {
  blueBox.setAttribute("style", "opacity:1");
}

function light3() {
  greenBox.setAttribute("style", "opacity:1");
}

function light4() {
  yellowBox.setAttribute("style", "opacity:1");
}

function lightOff1() {
  redBox.setAttribute("style", "opacity:.5");
}

function lightOff2() {
  blueBox.setAttribute("style", "opacity:.5");
}

function lightOff3() {
  greenBox.setAttribute("style", "opacity:.5");
}

function lightOff4() {
  yellowBox.setAttribute("style", "opacity:.5");
}
