let p1Scores = [];
let p2Scores = [];
let rollsLeft = 3;
let highscore = 0;
let p1Turn = true;
let dice = [];
let hold = false;
let playerTurn = "p1";

var newStone = [];

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;

let playerScores = {
  p1: { one: 0, two: 0, three: 0, four: 0, five: 0 },
  p2: { one: 0, two: 0, three: 0, four: 0, five: 0 }
};


const rolls = document.getElementById("rolls");
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");


function swapTurn() {
  calculateTotalTop();
  if (p1Turn === true) {
      p1Turn = false;
      playerTurn = "p2"
      document.getElementById("turn").textContent = "Player 2"
  } else {
      playerTurn = "p1"
      document.getElementById("turn").textContent = "Player 1"
      p1Turn = true;
  }
  roll();

  
 dieLock1 = false;
 dieLock2 = false;
 dieLock3 = false;
 dieLock4 = false;
 dieLock5 = false;

}

let dieLock1 = false;
let dieLock2 = false;
let dieLock3 = false;
let dieLock4 = false;
let dieLock5 = false;


function roll() {
  if (hold = true){
    if (rollsLeft > 0){
    rollsLeft--;
    if(!dieLock1){
    die1.src = randomRoll();
    one = getValue(die1);
    } 
    if(!dieLock2){
    die2.src = randomRoll();
    two = getValue(die2);
    }
    if(!dieLock3){
    die3.src = randomRoll();
    three = getValue(die3);
    }
    if(!dieLock4){
    die4.src = randomRoll();
    four = getValue(die4);
    }
    if(!dieLock5){
    die5.src = randomRoll();
    five = getValue(die5);
    }

    console.log(playerTurn);

    playerScores[playerTurn].one = one;
    playerScores[playerTurn].two = two;
    playerScores[playerTurn].three = three;
    playerScores[playerTurn].four = four;
    playerScores[playerTurn].five = five;
 
    newStone.length = 0;
    newStone.push(one, two, three, four, five);
    console.log(newStone);
  
    rolls.textContent = rollsLeft;
    }
    fullHouse();
    checkScore();
    fourOfAKind();
    threeOfAKind();
    chance();
    yahtzee();
  }

} 

function randomRoll() {
  const randomDice = Math.floor(Math.random() * 6);
  const rollDice = ["Images/1.png", "Images/2.png", "Images/3.png", "Images/4.png", "Images/5.png", "Images/6.png"];
  return rollDice[randomDice];
}

function getValue(dieId) {
  let number = 0;

  if (dieId.src.includes("1.png")) {
    number = 1;
  } else if (dieId.src.includes("2.png")) {
    number = 2;
  } else if (dieId.src.includes("3.png")) {
    number = 3;
  } else if (dieId.src.includes("4.png")) {
    number = 4;
  } else if (dieId.src.includes("5.png")) {
    number = 5;
  } else if (dieId.src.includes("6.png")) {
    number = 6;
  }
  return number;
}


let unlock1 = 0;
let unlock2 = 0;
let unlock3 = 0;
let unlock4 = 0;
let unlock5 = 0;

function lockDice(dice) {
  switch (dice) {
      case "die1":
          unlock1++;
          dieLock1 = unlock1 % 2 !== 0;
          borderChange(die1, unlock1);
          break;
      case "die2":
          unlock2++;
          dieLock2 = unlock2 % 2 !== 0;
          borderChange(die2, unlock2);
          break;
      case "die3":
          unlock3++;
          dieLock3 = unlock3 % 2 !== 0;
          borderChange(die3, unlock3);
          break;
      case "die4":
          unlock4++;
          dieLock4 = unlock4 % 2 !== 0;
          borderChange(die4, unlock4);
          break;
      case "die5":
          unlock5++;
          dieLock5 = unlock5 % 2 !== 0;
          borderChange(die5, unlock5);
          break;
      default:
          break;
  }
}

function borderChange(a, b) {
  if (b % 2 !== 0) {
      a.style.borderColor = "red";
  } else {
      a.style.borderColor = "black";
  }
}

  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;

function checkScore() {
  ones = 0;
  twos = 0;
  threes = 0;
  fours = 0;
  fives = 0;
  sixes = 0;

  checkIfNum(playerScores[playerTurn].one);
  checkIfNum(playerScores[playerTurn].two);
  checkIfNum(playerScores[playerTurn].three);
  checkIfNum(playerScores[playerTurn].four);
  checkIfNum(playerScores[playerTurn].five);

  // Selecteer de juiste HTML-elementen op basis van de huidige speler
  const acesElement = document.getElementById(`aces--${playerTurn}`);
  const twosElement = document.getElementById(`twos--${playerTurn}`);
  const threesElement = document.getElementById(`threes--${playerTurn}`);
  const foursElement = document.getElementById(`fours--${playerTurn}`);
  const fivesElement = document.getElementById(`fives--${playerTurn}`);
  const sixesElement = document.getElementById(`sixes--${playerTurn}`);
  const largeElement = document.getElementById(`large--${playerTurn}`);
  const smallElement = document.getElementById(`small--${playerTurn}`);

  acesElement.textContent = ones;
  twosElement.textContent = twos;
  threesElement.textContent = threes;
  foursElement.textContent = fours;
  fivesElement.textContent = fives;
  sixesElement.textContent = sixes;

  if (ones >= 1 && twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 ||
      twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 && sixes >= 1) {
    largeElement.textContent = 40;
  }
  if (ones >= 1 && twos >= 1 && threes >= 1 && fours >= 1 ||
      twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 || 
      threes >= 1 && fours >= 1 && fives >= 1 && sixes >= 1) {
    smallElement.textContent = 30;
  } else {
    largeElement.textContent = 0;
    smallElement.textContent = 0;
  }
}

  
function threeOfAKind(){

  const een = arrayCheck(1);
  const twee = arrayCheck(2);
  const drie = arrayCheck(3);
  const vier = arrayCheck(4);
  const vijf = arrayCheck(5);
  console.log(een);
  console.log(twee);
  console.log(drie);
  console.log(vier);
  console.log(vijf);

  const tKindElement = document.getElementById(`tkind--${playerTurn}`);

  if (een >= 3 || twee >= 3 || drie >= 3 || vier >= 3 || vijf >= 3) {
    console.log('Three of a Kind block is executed');
    console.log(`Values: ${playerScores[playerTurn].one}, ${playerScores[playerTurn].two}, ${playerScores[playerTurn].three}, ${playerScores[playerTurn].four}, ${playerScores[playerTurn].five}`);
    tKindElement.textContent = playerScores[playerTurn].one + playerScores[playerTurn].two + playerScores[playerTurn].three + playerScores[playerTurn].four + playerScores[playerTurn].five;
    console.log(`tKindElement.textContent: ${tKindElement.textContent}`);
    console.log('Three of a Kind');
  }else{
    tKindElement.textContent = 0;
  }
}

function fourOfAKind(){
  const een = arrayCheck(1);
  const twee = arrayCheck(2);
  const drie = arrayCheck(3);
  const vier = arrayCheck(4);
  const vijf = arrayCheck(5);
  console.log(een);
  console.log(twee);
  console.log(drie);
  console.log(vier);
  console.log(vijf);

  const fKindElement = document.getElementById(`fkind--${playerTurn}`);

  if (een >= 4 || twee >= 4 || drie >= 4 || vier >= 4 || vijf >= 4) {
    console.log("hoi");
    fKindElement.textContent = playerScores[playerTurn].one + playerScores[playerTurn].two + playerScores[playerTurn].three + playerScores[playerTurn].four + playerScores[playerTurn].five;
  }else{
    fKindElement.textContent = 0;
  }
}


function fullHouse() {
  const counts = [arrayCheck(1), arrayCheck(2), arrayCheck(3), arrayCheck(4), arrayCheck(5)];
  
  const fhouseElement = document.getElementById(`full-house--${playerTurn}`);

  // Check if there are exactly three of one number and two of another
  if (counts.includes(3) && counts.includes(2)) {
      fhouseElement.textContent = "25";
      console.log('Full House');
  } else {
      fhouseElement.textContent = 0;
  }
}

function chance(){
  const chanceElement =  document.getElementById(`chance--${playerTurn}`);

  chanceElement.textContent = playerScores[playerTurn].one + playerScores[playerTurn].two + playerScores[playerTurn].three + playerScores[playerTurn].four + playerScores[playerTurn].five;
}

function yahtzee(){
  const counts = [arrayCheck(1), arrayCheck(2), arrayCheck(3), arrayCheck(4), arrayCheck(5)];

  const yahtzeeElement =  document.getElementById(`yahtzee--${playerTurn}`);

  if (counts.includes(5)){
    yahtzeeElement.textContent = 50;
  }else{
    yahtzeeElement.textContent = 0;
  }
}
  

function arrayCheck(Stone){
  let num = 0;
  for (i= 0; i < newStone.length; i++){
    if (newStone[i] === Stone){
      num++;
    }
  }
  return num;
}

function lockScore(id) {

  dieLock1 = false;
  dieLock2 = false;
  dieLock3 = false;
  dieLock4 = false;
  dieLock5 = false;

  die1.style.borderColor = "black";
  
  die2.style.borderColor = "black";
  
  die3.style.borderColor = "black";
  
  die4.style.borderColor = "black";
  
  die5.style.borderColor = "black";


  let button = document.getElementById(id);
  if (button.textContent == "-") return;
  if (button.id.includes("p1") && playerTurn != "p1") return
  if (button.id.includes("p2") && playerTurn != "p2") return
  button.disabled = true;
  if (button.disabled) {
    let lockedScore = document.getElementById(`${id}--locked`);
    lockedScore.textContent = button.textContent;
    button.textContent = "-";
  }
  rollsLeft = 3;
  console.log(rollsLeft)
  rolls.textContent = rollsLeft;
  console.log(rolls);
  swapTurn();
}

function calculateTotalTop() {
  let totalScore = 0;

  let bottomTotal = 0;

  let ones = parseInt(document.getElementById(`aces--${playerTurn}--locked`).textContent);
  let twos = parseInt(document.getElementById(`twos--${playerTurn}--locked`).textContent);
  let threes = parseInt(document.getElementById(`threes--${playerTurn}--locked`).textContent);
  let fours = parseInt(document.getElementById(`fours--${playerTurn}--locked`).textContent);
  let fives = parseInt(document.getElementById(`fives--${playerTurn}--locked`).textContent);
  let sixes = parseInt(document.getElementById(`sixes--${playerTurn}--locked`).textContent);
  let tOfKind = parseInt(document.getElementById(`tkind--${playerTurn}--locked`).textContent);
  let fOfKind = parseInt(document.getElementById(`fkind--${playerTurn}--locked`).textContent);
  let fouse = parseInt(document.getElementById(`full-house--${playerTurn}--locked`).textContent);
  let small = parseInt(document.getElementById(`small--${playerTurn}--locked`).textContent);
  let large = parseInt(document.getElementById(`large--${playerTurn}--locked`).textContent);
  let yahtzee = parseInt(document.getElementById(`yahtzee--${playerTurn}--locked`).textContent);
  let chance = parseInt(document.getElementById(`chance--${playerTurn}--locked`).textContent);


  totalScore = ones += twos += threes += fours += fives += sixes;
  bottomTotal = tOfKind += fOfKind += fouse += small += large += yahtzee += chance;
  
  console.log("Total is " + totalScore);
  if (totalScore >= 63) {
    document.getElementById(`bonus--${playerTurn}--locked`).textContent = 35;
    document.getElementById(`subtotal--${playerTurn}--locked--top`).textContent = totalScore;
    document.getElementById(`total--${playerTurn}--locked--top`).textContent = totalScore + 35;
    document.getElementById(`top--${playerTurn}--total`).textContent = totalScore + 35;
  } else {
    document.getElementById(`subtotal--${playerTurn}--locked--top`).textContent = totalScore;
    document.getElementById(`total--${playerTurn}--locked--top`).textContent = totalScore;
    document.getElementById(`total--${playerTurn}--locked`).textContent = totalScore;
    document.getElementById(`grand--${playerTurn}--locked`).textContent = totalScore + bottomTotal;
    document.getElementById(`bottom--${playerTurn}--locked`).textContent = bottomTotal;
    document.getElementById(`top--${playerTurn}--total`).textContent = totalScore;        
  }
}



function checkIfNum(a) {
  switch (a) {
      case 1:
          ones++;
          break;
      case 2:
          twos += 2;
          break;
      case 3:
          threes += 3;
          break;
      case 4:
          fours += 4;
          break;
      case 5:
          fives += 5;
          break;
      case 6:
          sixes += 6;
          break;
  }
}

let een = 0;
let twee = 0;
let drie = 0;
let vier = 0;
let vijf = 0;
