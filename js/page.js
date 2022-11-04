
//Sets the score
function memory() {
    //Sets the number of wins to 0 if this is your first time playing
    if (localStorage.wins == undefined) {
      localStorage.wins = 0;}
    //Sets the number of wins displayed equal to the number stored in the browser
    document.getElementById("winNumber").innerHTML = localStorage.wins;
    //Sets the number of losses to 0 if this is your first time playing
    if (localStorage.losses == undefined) {
      localStorage.losses = 0;}
    //Sets the number of losses displayed equal to the number stored in the browser
    document.getElementById("loseNumber").innerHTML = localStorage.losses;
    //Sets the number of ties to 0 if this is your first time playing
    if (localStorage.ties == undefined) {
      localStorage.ties = 0;}
    //Sets the number of ties displayed equal to the number stored in the browser
    document.getElementById("tieNumber").innerHTML = localStorage.ties;
  }

function game(userChoiceNum) {
  sessionStorage.playerChoice = userChoiceNum;
  
  //Scale svgs based on User's choice
  document.getElementById("rock").style.transform = "scale(1)";
  document.getElementById("rock").style.opacity = .5;
  document.getElementById("paper").style.transform = "scale(1)";
  document.getElementById("paper").style.opacity = .5;
  document.getElementById("scissors").style.transform = "scale(1)";
  document.getElementById("scissors").style.opacity = .5;
  document.getElementById(sessionStorage.playerChoice).style.transform = "scale(1.3)";
  document.getElementById(sessionStorage.playerChoice).style.opacity = 1;

  //Randomly generates opponents choice
   var oppChoiceNum = Math.ceil(Math.random() * 3);
   if (oppChoiceNum == 1) {
     sessionStorage.opponentChoice = "rock";
   }
   else if (oppChoiceNum == 2) {
     sessionStorage.opponentChoice = "paper";
   }
   else if (oppChoiceNum == 3) {
     sessionStorage.opponentChoice = "scissors";
   }
  //Changes the source for the opponent's choice image to whatever choice was randomly selected
  document.getElementById("opponentChoice").src = "svg/" + sessionStorage.opponentChoice + ".svg";
  if ((sessionStorage.opponentChoice == "rock") || (sessionStorage.opponentChoice == "paper")) {
    document.getElementById("opponentChoice").style.height = "auto";
    document.getElementById("opponentChoice").style.width = "7em";
  }
  else if (sessionStorage.opponentChoice == "scissors") {
    document.getElementById("opponentChoice").style.height = "100%";
    document.getElementById("opponentChoice").style.width = "auto";
  }
  document.getElementById("opponentChoice").style.animation = "expand .25s ease 0s forwards";
  setTimeout(() => (document.getElementById("opponentChoice").style.animation = "none"), 250);

  //Determines whether it is a win, loss, or tie
  if (sessionStorage.playerChoice == sessionStorage.opponentChoice) {
    sessionStorage.result = "tie";
  }
  else {
    if (sessionStorage.playerChoice == "rock") {
      if (sessionStorage.opponentChoice == "paper") {
        sessionStorage.result = "lose";}
      else if (sessionStorage.opponentChoice == "scissors") {
        sessionStorage.result = "win";}
    }
    else if (sessionStorage.playerChoice == "paper") {
      if (sessionStorage.opponentChoice == "rock") {
        sessionStorage.result = "win";}
      else if (sessionStorage.opponentChoice == "scissors") {
        sessionStorage.result = "lose";}
    }
    else if (sessionStorage.playerChoice == "scissors") {
      if (sessionStorage.opponentChoice == "rock") {
        sessionStorage.result = "lose";}
      else if (sessionStorage.opponentChoice == "paper") {
        sessionStorage.result = "win";}
    }
  }

  document.getElementById("win").style.transform = "scale(1)";
  document.getElementById("lose").style.transform = "scale(1)";
  document.getElementById("tie").style.transform = "scale(1)";
  //Scales the score number that is being increased up slightly
  document.getElementById(sessionStorage.result).style.transform = "scale(1.1)";
  if (sessionStorage.result == "win") {
    document.getElementById("message").innerHTML = "Congrats, you won this round!";
    localStorage.wins++;
    document.getElementById("winNumber").innerHTML = localStorage.wins;
  }
  else if (sessionStorage.result == "lose") {
    document.getElementById("message").innerHTML = "Aww, you lost. Want to try again?";
    localStorage.losses++;
    document.getElementById("loseNumber").innerHTML = localStorage.losses;
  }
  else if (sessionStorage.result == "tie") {
    document.getElementById("message").innerHTML = "It's a tie! Play again to break it!";
    localStorage.ties++;
    document.getElementById("tieNumber").innerHTML = localStorage.ties;
  }
}

function reset() {
  document.getElementById("rock").style.transform = "scale(1)";
  document.getElementById("rock").style.opacity = .5;
  document.getElementById("paper").style.transform = "scale(1)";
  document.getElementById("paper").style.opacity = .5;
  document.getElementById("scissors").style.transform = "scale(1)";
  document.getElementById("scissors").style.opacity = .5;
  document.getElementById("opponentChoice").src = "svg/mystery.svg";
  document.getElementById("opponentChoice").style.height = "100%";
  document.getElementById("opponentChoice").style.width = "auto";
  document.getElementById("message").innerHTML = "Best of luck!";
  document.getElementById("win").style.transform = "scale(1)";
  document.getElementById("lose").style.transform = "scale(1)";
  document.getElementById("tie").style.transform = "scale(1)";
  localStorage.wins = 0;
  document.getElementById("winNumber").innerHTML = localStorage.wins;
  localStorage.losses = 0;
  document.getElementById("loseNumber").innerHTML = localStorage.losses;
  localStorage.ties = 0;
  document.getElementById("tieNumber").innerHTML = localStorage.ties;
}