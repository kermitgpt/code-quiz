//VARIABLES

var qArray = [
  {
    questionText:
      "Which item below is NOT included in the garage customization menu?",
    answerChoices: ["Decals", "Antennas", "Fenders", "Goal Explosions"],
    correctChoice: "Fenders",
  },
  {
    questionText: "What is the highest rank you can achieve in multiplayer?",
    answerChoices: ["Champion", "Diamond", "Platinum", "Supersonic Legend"],
    correctChoice: "Supersonic Legend",
  },
  {
    questionText:
      "In which game mode do you get special power-ups (examples include Disruptor, Grappling Hook, Haymaker, Magnetizer)?",
    answerChoices: ["Rumble", "Dropshot", "Hoops", "Snowday"],
    correctChoice: "Rumble",
  },
  {
    questionText:
      "Each rank (i.e. Bronze, Silver, Gold) is split into three tiers (i.e. Bronze 1, Bronze 2, Bronze 3). How many divisions are within each tier to progress to the next tier/rank?",
    answerChoices: ["2", "4", "6", "3"],
    correctChoice: "4",
  },
  {
    questionText:
      "What is the highest level of rarity for items in Rocket League?",
    answerChoices: ["Exotic", "Black Market", "Import", "Very-Rare"],
    correctChoice: "Black Market",
  },
  {
    questionText: "What year was Rocket League initially released?",
    answerChoices: ["2013", "2015", "2017", "2019"],
    correctChoice: "",
  },
  {
    questionText: "Which gaming studio developed Rocket League?",
    answerChoices: ["Bethesda", "Activision", "Psyonix", "Ubisoft"],
    correctChoice: "Psyonix",
  },
  {
    questionText: "Which of the following is not an arena in Rocket League?",
    answerChoices: ["Mannfield", "Utopia Coliseum", "Farmstead", "Urban Park"],
    correctChoice: "Urban Park",
  },
  {
    questionText:
      "There are two types of boost pads in the game. One gives you a 100% refill on boost. What does the smaller boost pad give you?",
    answerChoices: ["20%", "12%", "5%", "33%"],
    correctChoice: "12%",
  },
  {
    questionText:
      "Which of the following is not a vehicle model within the game?",
    answerChoices: ["Breakout", "Dominus", "Octane", "Quadro"],
    correctChoice: "Quadro",
  },
];

var startBox = document.getElementById("startBox");
var startQuizBtn = document.getElementById("startQuizBtn");
var questionCard = document.getElementById("questionCard");
var questionText = document.getElementById("questionText");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var questionPosition = 0;
var endBox = document.getElementById("endBox");
var userInitialsBtn = document.getElementById("submitScore");
var userName = document.getElementById("userName");
var userScore = document.getElementById("userScore");
var playAgain = document.getElementById("playAgain");
var countdown = document.getElementById("countdownClock");
var score = 10;
var time = qArray.length * 3;
var correctAnswer = 0;
var wrongAnswer = 0;
var wrapper = document.getElementById("wrapper");
let questionIndex = 0;
var timer;
var finalScore = document.getElementsByClassName("finalScore");

//Hide questions card and end of quiz screen to start

//FUNCTIONS

//EVENT LISTENERS

//Starts quiz and hides startBox then displays questionCards
startQuizBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  startBox.classList.add("hide");
  questionCard.classList.remove("hide");
  timer = setInterval(clock, 1000);
  countdown.textContent = time;
});

function renderQuestions() {
  var questionList = "";
  qArray.forEach(function (question, index) {
    let choices = "";
    question.answerChoices.forEach(function (choice, index) {
      const button = `
        <button id="choice${index}" class="btn btn-lg btn-primary choiceBtn ${
        choice === question.correctChoice ? "correct-answer" : ""
      }">${choice}</button>
      `;
      choices += button;
    });
    questionList += `
      <div class="choice hide">
        <p id="questionText" class="row col-12 h3 justify-content-center">
          ${question.questionText}
        </p>
        <div class="col-12 gx-2 p-2 text-center">
        ${choices}
        </div>
      </div>
    `;
  });
  return questionList;
}

document.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.classList.contains("choiceBtn")) {
    if (event.target.classList.contains("correct-answer")) {
      score += 1;
      time += 5;
    } else {
      score -= 1;
      time += 5;
    }
    if (questionIndex >= 9) {
      document.querySelector("#endBox").classList.remove("hide");
    }
    document.querySelectorAll(".choice")[questionIndex].classList.add("hide");
    document
      .querySelectorAll(".choice")
      [++questionIndex].classList.remove("hide");
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("endBtn")) {
    localStorage.setItem("");
  }
});

wrapper.innerHTML = renderQuestions();

document.querySelector(".choice").classList.remove("hide");

console.log(renderQuestions());

function clock() {
  time--;
  countdown.textContent = time;
  if (time <= 0) {
    document.querySelector("#questionCard").classList.add("hide");
    document.querySelector("#endBox").classList.remove("hide");
    clearInterval(timer);
  }
}
