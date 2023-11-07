let p1Scores = [];
let p2Scores = [];
let rollsLeft = 3;
let highscore = 0;
let p1Turn = true;
let dice = [];
let hold = false;

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;


const rolls = document.getElementById("rolls");
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");

const acesp1 = document.getElementById("aces--p1");
const twosp1 = document.getElementById("twos--p1");
const threesp1 = document.getElementById("threes--p1");
const foursp1 = document.getElementById("fours--p1");
const fivesp1 = document.getElementById("fives--p1");
const sixesp1 = document.getElementById("sixes--p1");



let dieLock1 = false;
let dieLock2 = false;
let dieLock3 = false;
let dieLock4 = false;
let dieLock5 = false;


function roll() {
  if (hold = true){
    if (rollsLeft > -999){
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
  
    rolls.textContent = rollsLeft;
    }
  }
  checkScore();
} 

function randomRoll() {
  const randomDice = Math.floor(Math.random() * 6);
  const rollDice = ["Images/1.png", "Images/2.png", "Images/3.png", "Images/4.png", "Images/5.png", "Images/6.png"];
  return rollDice[randomDice];
}

function getValue(dieId){
  let number = 0;
  let die = document.getElementById(dieId);

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

function checkScore(){
  ones = 0;
  twos = 0;
  threes = 0;
  fours = 0;
  fives = 0;
  sixes = 0;
  
  checkIfNum(one);
  checkIfNum(two);
  checkIfNum(three);
  checkIfNum(four);
  checkIfNum(five);
  acesp1.textContent = ones;
  twosp1.textContent = twos;
  threesp1.textContent = threes;
  foursp1.textContent = fours;
  fivesp1.textContent = fives;
  sixesp1.textContent = sixes;
    const largep1 = document.getElementById("large--p1");
    const smallp1 = document.getElementById("small--p1");
    const fHousep1 = document.getElementById("full-house--p1");

  if (ones >= 1 && twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 ||
    twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 && sixes >= 1){
    largep1.textContent = 40;
  }else  if(ones >= 1 && twos >= 1 && threes >= 1 && fours >= 1 ||
     twos >= 1 && threes >= 1 && fours >= 1 && fives >= 1 || 
     threes >= 1 && fours >= 1 && fives >= 1 && sixes >= 1){
    smallp1.textContent = 30;
  } else if (ones == 3 && (twos == 2 || threes == 2 || fours == 2 || fives == 2 || sixes == 2) ||
    twos == 3 && (ones == 2 || threes == 2 || fours == 2 || fives == 2 || sixes == 2) ||
    threes == 3 && (ones == 2 || twos == 2 || fours == 2 || fives == 2 || sixes == 2) ||
    fours == 3 && (ones == 2 || twos == 2 || threes == 2 || fives == 2 || sixes == 2) ||
    fives == 3 && (ones == 2 || twos == 2 || threes == 2 || fours == 2 || sixes == 2) ||
    sixes == 3 && (ones == 2 || twos == 2 || threes == 2 || fours == 2 || fives == 2)) {
  fHousep1.textContent = 25;
  } else{
    largep1.textContent = 0;
    smallp1.textContent = 0; 
    fHousep1.textContent = 0;
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

