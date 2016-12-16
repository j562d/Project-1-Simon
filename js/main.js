/*----variables----*/
var compPattern = [];
var playPattern = [];
var startBtn = document.querySelector('button');
var redBox = document.getElementById('cell1');
var blueBox = document.getElementById('cell2');
var greenBox = document.getElementById('cell3');
var yellowBox = document.getElementById('cell4');
var parent = document.getElementById('container');

/*----event listeners-----*/
parent.addEventListener('click', playerChoice);
startBtn.addEventListener('click', startGame);
parent.addEventListener('mousedown', playerClickDown);
parent.addEventListener('mouseup', playerClickUp);
document.documentElement.addEventListener('mouseup', redUp);

/*----functions-----*/

function playSound1 () {
    cloneAudio(play1);
}

function playSound2 () {
    cloneAudio(play2);
}

function playSound3 () {
    cloneAudio(play3);
}

function playSound4 () {
    cloneAudio(play4);
}

//adds random number to compter's array//
function compTurn() {
  disable();
  var random = Math.floor(Math.random()*4+1);
  compPattern.push(random);
  playPattern = [];
  document.getElementById('round').innerHTML = "Round " + compPattern.length;
  setTimeout(displayColors, 1000);
}

function unHighlight() {
      redBox.removeAttribute("style", "opacity: 1");
      blueBox.removeAttribute("style", "opacity: 1");
      greenBox.removeAttribute("style", "opacity: 1");
      yellowBox.removeAttribute("style", "opacity: 1");
  }

// timer variables
var tickResolution = 150;
var ticksPerColor = 2;
var ticksBetween = 1;
var timerId;

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
      unHighlight();
      colorIdx++;
      if (colorIdx === compPattern.length) {
        clearInterval(timerId);
        enable();
      }
    }
    tickCount++;
  }
}

//start game function
function startGame() {
  document.getElementById('primary').innerHTML='&nbsp;';
  cloneAudio(play6);
  playPattern = [];
  setTimeout(compTurn, 1000);
  disableStart();
}

//compare arrays
function compare() {
  for(var i = 0; i < playPattern.length; i++) {
    if(compPattern[i] !=playPattern[i]) {
      over();
      break;
    }
  } if(compPattern[i] === playPattern[i] && playPattern.length === 10) {
    winner();
  } if(compPattern.length == playPattern.length) {
    compTurn();
  }
}

//game over
function over(){
  //alert("WRONG!");
  document.getElementById('primary').innerHTML='<img src="http://www.reactiongifs.com/r/mjl.gif">' + ' Wrong move! Please try again';
  cloneAudio(play5);
  initialize();
}

//clone audio
function cloneAudio(audioNode) {
  var clone = audioNode.cloneNode(true);
  clone.play();
}

//pushes player's choice to player array
function playerChoice(evt) {
    var clickedItem = evt.target.id
    if (clickedItem ==='cell1')
        playPattern.push(1);
    if (clickedItem ==='cell2')
        playPattern.push(2);
    if (clickedItem ==='cell3')
        playPattern.push(3);
    if (clickedItem ==='cell4')
        playPattern.push(4);
    compare();
    }

//plays sound and flashes on player's click
function playerClickDown(evt) {
  var clickedEl = evt.target.id
    if (clickedEl ==='cell1') {
        cloneAudio(play1);
        redBox.setAttribute("style", "opacity:1");
    }
    if (clickedEl ==='cell2') {
        cloneAudio(play2);
        blueBox.setAttribute("style", "opacity:1");
    }
    if (clickedEl ==='cell3') {
        cloneAudio(play3);
        greenBox.setAttribute("style", "opacity:1");
    }
    if (clickedEl ==='cell4') {
        cloneAudio(play4);
        yellowBox.setAttribute("style", "opacity:1");
      }
}

//unhighligts on mouse up
function playerClickUp(evt) {
  var clickedEl = evt.target.id
    if (clickedEl ==='cell1') {
        redBox.setAttribute("style", "opacity:.3");
    }
    if (clickedEl ==='cell2') {
        blueBox.setAttribute("style", "opacity:.3");
    }
    if (clickedEl ==='cell3') {
        greenBox.setAttribute("style", "opacity:.3");
    }
    if (clickedEl ==='cell4') {
        yellowBox.setAttribute("style", "opacity:.3");
    }
}

//winner
function winner(){
  //alert("WRONG!");
  document.getElementById('primary').innerHTML='<img src="http://2.bp.blogspot.com/-BwDUPcT7agI/Vlh-bWkjZMI/AAAAAAAAARo/7LOPN8PJQfg/s320/Excited-Kid-Gif.gif">' + 'You Won!';
  cloneAudio(play7);
  initialize();
}

//disable event handlers
function disable() {
  parent.removeEventListener('click', playerChoice);
  parent.removeEventListener('mousedown', playerClickDown);
  parent.removeEventListener('mouseup', playerClickUp);
}

function enable() {
  parent.addEventListener('click', playerChoice);
  parent.addEventListener('mousedown', playerClickDown);
  parent.addEventListener('mouseup', playerClickUp);
}

function initialize() {
  disable();
  enableStart();
  compPattern = [];
}

function enableStart() {
  startBtn.addEventListener('click', startGame);
}

function disableStart() {
  startBtn.removeEventListener('click', startGame);
}

initialize();

function redUp() {
  redBox.setAttribute("style", "opacity:.3");
  blueBox.setAttribute("style", "opacity:.3");
  greenBox.setAttribute("style", "opacity:.3");
  yellowBox.setAttribute("style", "opacity:.3");
}
