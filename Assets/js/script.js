//VARIABLES
var startQuiz = $("#startQuizBtn");
var score = 0;
var questionPosition = 0;

var userName = $("#userName");
var userScore = $("#userScore");
var playAgain = $("#playAgain");
var countdown = $("#countdownClock");

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

//FUNCTIONS

//EVENT LISTENERS
