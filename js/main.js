/*----variables----------------------------------*/
var computer = [];
var player = [];
var startBtn = document.querySelector('button');
var redBox = document.getElementById('cell1');
var blueBox = document.getElementById('cell2');
var greenBox = document.getElementById('cell3');
var yellowBox = document.getElementById('cell4');
var boxes = document.getElementById('container');

/*----event listeners---------------------------*/
boxes.addEventListener('click', playerPick);
startBtn.addEventListener('click', startGame);
boxes.addEventListener('mousedown', playerMouseDown);
document.documentElement.addEventListener('mouseup', playerMouseUp);

/*----functions--------------------------------*/

//adds random number to compter's array
function compTurn() {
  disable();
  var random = Math.floor(Math.random()*4+1);
  computer.push(random);
  player = [];
  document.getElementById('round').innerHTML = "Round " + computer.length;
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
   if (computer[colorIdx] === 1)  {
    document.getElementById('cell1').setAttribute("style", "opacity: 1");
    cloneAudio(play1);
    } else if (computer[colorIdx] === 2) {
        document.getElementById('cell2').setAttribute("style", "opacity: 1");
        cloneAudio(play2);
      } else if (computer[colorIdx] === 3) {
        document.getElementById('cell3').setAttribute("style", "opacity: 1");
        cloneAudio(play3);
      } else if (computer[colorIdx] === 4) {
        document.getElementById('cell4').setAttribute("style", "opacity: 1");
        cloneAudio(play4);
      }
    };
    if (tickCount ===  hideTick) {
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

//start game function
function startGame() {
  document.getElementById('primary').innerHTML='&nbsp;';
  cloneAudio(play6);
  player = [];
  setTimeout(compTurn, 1000);
  disableStart();
}

//compare arrays
function compare() {
  for(var i = 0; i < player.length; i++) {
    if(computer[i] !=player[i]) {
      over();
      break;
    }
  } if(computer[i] === player[i] && player.length === 5) {
    winner();
  } if(computer.length == player.length) {
    compTurn();
  }
}

//game over
function over(){
  //alert("WRONG!");
  document.getElementById('primary').innerHTML='<img src="assets/mjl.gif">' + ' Wrong move! Please try again';
  cloneAudio(play5);
  initialize();
}

//clone audio
function cloneAudio(audioNode) {
  var clone = audioNode.cloneNode(true);
  clone.play();
}

//pushes player's choice to player array
function playerPick(evt) {
    var clickedItem = evt.target.id
    if (clickedItem ==='cell1')
        player.push(1);
    if (clickedItem ==='cell2')
        player.push(2);
    if (clickedItem ==='cell3')
        player.push(3);
    if (clickedItem ==='cell4')
        player.push(4);
    compare();
    }

//plays sound and flashes on player's click
function playerMouseDown(evt) {
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

//winner
function winner(){
  //alert("WRONG!");
  document.getElementById('primary').innerHTML='<img src="assets/excited.gif">' + 'You Won!!!';
  cloneAudio(play7);
  initialize();
}

//disable event handlers
function disable() {
  boxes.removeEventListener('click', playerPick);
  boxes.removeEventListener('mousedown', playerMouseDown);
  document.documentElement.removeEventListener('mouseup', playerMouseUp);
}

function enable() {
  boxes.addEventListener('click', playerPick);
  boxes.addEventListener('mousedown', playerMouseDown);
  document.documentElement.addEventListener('mouseup', playerMouseUp);
}

function initialize() {
  disable();
  enableStart();
  computer = [];
}

function enableStart() {
  startBtn.addEventListener('click', startGame);
}

function disableStart() {
  startBtn.removeEventListener('click', startGame);
}

initialize();

function playerMouseUp() {
  redBox.setAttribute("style", "opacity:.3");
  blueBox.setAttribute("style", "opacity:.3");
  greenBox.setAttribute("style", "opacity:.3");
  yellowBox.setAttribute("style", "opacity:.3");
}

