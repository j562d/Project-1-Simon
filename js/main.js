/*----variables----------------------------------*/
var computer = [];
var player = [];
var startBtn = document.querySelector('button');
var redBox = document.getElementById('red');
var blueBox = document.getElementById('blue');
var greenBox = document.getElementById('green');
var yellowBox = document.getElementById('yellow');
var boxes = document.getElementById('container');

/*----event listeners---------------------------*/
boxes.addEventListener('click', playerPick);
startBtn.addEventListener('click', startGame);
boxes.addEventListener('mousedown', playerMouseDown);
document.documentElement.addEventListener('mouseup', unHighlight);

/*----functions--------------------------------*/

//initialize game
function initialize() {
  disable();
  enableStart();
  computer = [];
}

//clone audio
function cloneAudio(audioNode) {
  var clone = audioNode.cloneNode(true);
  clone.play();
}

//start game
function startGame() {
  document.getElementById('primary').innerHTML = '&nbsp;';
  cloneAudio(sound6);
  player = [];
  setTimeout(compTurn, 1000);
  disableStart();
}

//starts computer's sequence
function compTurn() {
  disable();
  var random = Math.floor(Math.random() * 4 + 1);
  computer.push(random);
  player = [];
  document.getElementById('round').innerHTML = "Round " + computer.length;
  setTimeout(displayColors, 1000);
}

//unhighlights boxes
function unHighlight() {
  redBox.removeAttribute("style", "opacity: 1");
  blueBox.removeAttribute("style", "opacity: 1");
  greenBox.removeAttribute("style", "opacity: 1");
  yellowBox.removeAttribute("style", "opacity: 1");
}

// displays computer sequence
var tickResolution = 150;
var ticksPerColor = 2;
var ticksBetween = 1;
var timerId;

function displayColors() {
  var colorIdx = 0;
  var tickCount = 0;
  timerId = setInterval(handleTick, tickResolution);

  function handleTick() {
    var showTick = colorIdx * (ticksBetween + ticksPerColor);
    var hideTick = ticksPerColor + colorIdx * (ticksBetween + ticksPerColor);
    if (tickCount === showTick) {
      if (computer[colorIdx] === 1) {
        document.getElementById('red').setAttribute("style", "opacity: 1");
        cloneAudio(sound1);
      } else if (computer[colorIdx] === 2) {
        document.getElementById('blue').setAttribute("style", "opacity: 1");
        cloneAudio(sound2);
      } else if (computer[colorIdx] === 3) {
        document.getElementById('green').setAttribute("style", "opacity: 1");
        cloneAudio(sound3);
      } else if (computer[colorIdx] === 4) {
        document.getElementById('yellow').setAttribute("style", "opacity: 1");
        cloneAudio(sound4);
      }
    };
    if (tickCount === hideTick) {
      unHighlight();
      colorIdx++;
      if (colorIdx === computer.length) {
        clearInterval(timerId);
        enable();
      }
    }
    tickCount++;
  }
}

//compare arrays
function compare() {
  for (var i = 0; i < player.length; i++) {
    if (computer[i] != player[i]) {
      over();
      break;
    }
  }
  if (computer[i] === player[i] && player.length === 10) {
    winner();
  }
  if (computer.length == player.length) {
    compTurn();
  }
}

//game over
function over() {
  document.getElementById('primary').innerHTML = '<img src="assets/mjl.gif">' + ' Wrong move! Please try again';
  cloneAudio(sound5);
  initialize();
}

//winner
function winner() {
  document.getElementById('primary').innerHTML = '<img src="assets/excited.gif">' + 'You Won!!!';
  cloneAudio(sound7);
  initialize();
}

//pushes player's choice to player array
function playerPick(evt) {
  var clickedItem = evt.target.id
  if (clickedItem === 'red') player.push(1);
  if (clickedItem === 'blue') player.push(2);
  if (clickedItem === 'green') player.push(3);
  if (clickedItem === 'yellow') player.push(4);
  compare();
}

//plays sound and flashes on player's click
function playerMouseDown(evt) {
  var clickedEl = evt.target.id
  if (clickedEl === 'red') {
    cloneAudio(sound1);
    redBox.setAttribute("style", "opacity:1");
  }
  if (clickedEl === 'blue') {
    cloneAudio(sound2);
    blueBox.setAttribute("style", "opacity:1");
  }
  if (clickedEl === 'green') {
    cloneAudio(sound3);
    greenBox.setAttribute("style", "opacity:1");
  }
  if (clickedEl === 'yellow') {
    cloneAudio(sound4);
    yellowBox.setAttribute("style", "opacity:1");
  }
}

//disable event handlers
function disable() {
  boxes.removeEventListener('click', playerPick);
  boxes.removeEventListener('mousedown', playerMouseDown);
  document.documentElement.removeEventListener('mouseup', unHighlight);
}

//enable event handlers
function enable() {
  boxes.addEventListener('click', playerPick);
  boxes.addEventListener('mousedown', playerMouseDown);
  document.documentElement.addEventListener('mouseup', unHighlight);
}

//enable Start button
function enableStart() {
  startBtn.addEventListener('click', startGame);
}

//disable Start button
function disableStart() {
  startBtn.removeEventListener('click', startGame);
}

initialize();
