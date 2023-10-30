const leftHand = document.getElementById("left");
const rightHand = document.getElementById("right");
let resultaat;
let rondenummer = 1;

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const winner = document.getElementById("winner");

function selected(hand) {
  if (hand === "rock") {
    leftHand.src = "images/rock.png";
  } else if (hand === "paper") {
    leftHand.src = "images/paper.png";
  } else if (hand === "scissors") {
    leftHand.src = "images/scissors.png";
  }

  const randomHandIndex = Math.floor(Math.random() * 3); // Genereer 0, 1 of 2
  const hands = ["images/rock.png", "images/paper.png", "images/scissors.png"];
  rightHand.src = hands[randomHandIndex];

  checkHands();
}

function checkHands() {
  switch (true) {
    case leftHand.src.includes("rock.png") &&
      rightHand.src.includes("rock.png"):
      resultaat = "Tie";
      break;
    case leftHand.src.includes("paper.png") &&
      rightHand.src.includes("paper.png"):
      resultaat = "Tie";
      break;
    case leftHand.src.includes("scissors.png") &&
      rightHand.src.includes("scissors.png"):
      resultaat = "Tie";
      break;
      //rock vs scissors
    case leftHand.src.includes("rock.png") &&
      rightHand.src.includes("scissors.png"):
      resultaat = "You";
      break;
    case rightHand.src.includes("rock.png") &&
      leftHand.src.includes("scissors.png"):
      resultaat = "Ai";
      break;
      //scissors vs paper
    case leftHand.src.includes("scissors.png") &&
      rightHand.src.includes("paper.png"):
      resultaat = "You";
      break;
    case rightHand.src.includes("scissors.png") &&
      leftHand.src.includes("paper.png"):
      resultaat = "Ai";
      break;
      //paper vs rock
    case leftHand.src.includes("paper.png") &&
      rightHand.src.includes("rock.png"):
      resultaat = "You";
      break;
    case leftHand.src.includes("rock.png") &&
      rightHand.src.includes("paper.png"):
      resultaat = "Ai";
      break;
  }
  

  switch (rondenummer) {
    case 1:
      r1.textContent = resultaat;
      break;
    case 2:
      r2.textContent = resultaat;
      break;
    case 3:
      r3.textContent = resultaat;
      break;
  }

  if (rondenummer < 3) {
    rondenummer++;
  } 
  else {
    rondenummer = 1;
    resetAll();
    
  }

  if (resultaat === "Tie") {
    document.getElementById("left").style.border = "10px solid red";
    document.getElementById("right").style.border = "10px solid red";
  } else if (resultaat === "You") {
    document.getElementById("left").style.border = "10px solid green";
    document.getElementById("right").style.border = "10px solid red";
  } else if (resultaat === "Ai") {
    document.getElementById("right").style.border = "10px solid green";
    document.getElementById("left").style.border = "10px solid red";
  }

  if (r1.textContent === "You" && r2.textContent === "You" || r2.textContent === "You" && r3.textContent === "You" || r3.textContent === "You" && r1.textContent === "You") {
    winner.textContent = "Winner: You";
  } else if (r1.textContent === "Tie" && r2.textContent === "Tie" || r2.textContent === "Tie" && r3.textContent === "Tie" || r3.textContent === "Tie" && r1.textContent === "Tie") {
    winner.textContent = "Winner: Tie";
  } else if (r1.textContent === "Ai" && r2.textContent === "Ai" || r2.textContent === "Ai" && r3.textContent === "Ai" || r3.textContent === "Ai" && r1.textContent === "Ai") {
    winner.textContent = "Winner: Ai";
  } else {
    winner.textContent = "Winner: No one won";
  }
  }


function resetAll(){
  document.getElementById("left").style.border = "3px solid black";
  document.getElementById("right").style.border = "3px solid black";
  leftHand.src = "";
  rightHand.src = "";
  r1.textContent = "-";
  r2.textContent = "-";
  r3.textContent = "-";


}