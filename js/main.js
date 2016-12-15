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

//redBox.addEventListener('click', playerChoice);

//blueBox.addEventListener('click', playerChoice);

//greenBox.addEventListener('click', playerChoice);

//yellowBox.addEventListener('click', playerChoice);

startBtn.addEventListener('click', startGame);

parent.addEventListener('mousedown', playerClickDown);

//redBox.addEventListener('mousedown', playerClickDown);

//blueBox.addEventListener('mousedown', playerClickDown);

//greenBox.addEventListener('mousedown', playerClickDown);

//yellowBox.addEventListener('mousedown', playerClickDown);

parent.addEventListener('mouseup', playerClickUp);

//redBox.addEventListener('mouseup', playerClickUp);

//blueBox.addEventListener('mouseup', playerClickUp);

//greenBox.addEventListener('mouseup', playerClickUp);

//yellowBox.addEventListener('mouseup', playerClickUp);

/*----functions-----*/

disable();


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
  roundCounter();
  setTimeout(displayColors, 1000);
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
  document.getElementById('endgame').innerHTML="";
  cloneAudio(play6);
  compPattern = [];
  playPattern = [];
  setTimeout(compTurn, 1000);
  disableStart();
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
  document.getElementById('endgame').innerHTML='Wrong move! Please Try Again!';
  cloneAudio(play5);
  compPattern = [];
  initialize();
}



//function timeout() {
//  setTimeout(alert, 5000);
//}

//function test() {
//  alert("hello");
//}

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
  document.getElementById('endgame').innerHTML='<img src="assets/excited.gif">';
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

}

function enableStart() {
  startBtn.addEventListener('click', startGame);
}

function disableStart() {
  startBtn.removeEventListener('click', startGame);
}
