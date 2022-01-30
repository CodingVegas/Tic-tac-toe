let boxes = document.querySelectorAll('.col-2');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].innerHTML = "";
}

alertbox.style.visibility="hidden";

$(function() {
  let divs = document.querySelectorAll('.col-2');
console.log(divs);

player = 0; 
//a. A heading should say whether it is X’s or O’s turn and change with each move made.
turn.innerHTML = "It's X's Turn";
  //jquery version for adding even listeners for tic-tac-toe
 $('.col-2').on("click", (evt) => {
  if (player % 2 == 0 && evt.target.innerText != "X" && evt.target.innerText != "O") {
    turn.innerHTML = "It's O's Turn";
//     When a cell in the grid is clicked, an X or O should 
// appear in that spot depending on whose turn it is.
    evt.target.innerText = "X";
    evt.target.style.fontsize = "35px";
    evt.target.style.fontFamily = "arial";
    evt.target.style.fontWeight = "bold"
    getWinner()
    player++;
   } else if (evt.target.innerText != "X" && evt.target.innerText != "O"){
    turn.innerHTML = "It's X's Turn";
//     When a cell in the grid is clicked, an X or O should 
// appear in that spot depending on whose turn it is.
      evt.target.innerText = "O";
      evt.target.style.fontsize = "35px"
      evt.target.style.fontFamily = "arial";
      evt.target.style.fontWeight = "bold"
      getWinner()
      player++;
     }
   })
    // https://api.jquery.com/on/
});

function getWinner() {

var box1 = document.getElementById("1"),
  box2 = document.getElementById("2"),
  box3 = document.getElementById("3"),
  box4 = document.getElementById("4"),
  box5 = document.getElementById("5"),
  box6 = document.getElementById("6"),
  box7 = document.getElementById("7"),
  box8 = document.getElementById("8"),
  box9 = document.getElementById("9");
  
  // d. When a player has won, or the board is full and the game results in a draw, a 
  // Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
  alertbox.innerHTML = box1.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
  alertbox.innerHTML = box4.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
  alertbox.innerHTML = box7.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
  alertbox.innerHTML = box1.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
  alertbox.innerHTML = box2.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
  alertbox.innerHTML = box3.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
  alertbox.innerHTML = box1.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
  alertbox.innerHTML = box3.innerHTML + " is the winner!";
  alertbox.style.visibility="visible";
  }
else if (box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== "" ){
  alertbox.innerHTML="It's a Tie!";
  alertbox.style.visibility="visible";
  }
}

// c. A button should be available to clear the grid and restart the game.
document.getElementById('play').addEventListener('click', replay);

function replay() {
  let divs = document.querySelectorAll('.col-2');
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "";
  }
  title.innerHTML = "Play Again!";
  title.style.fontSize = "25px";
  alertbox.innerHTML="";
  alertbox.style.visibility="hidden";
}
