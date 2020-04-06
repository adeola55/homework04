var questions = [
    { q: "What was the first capital of the United States?", a: ["Washington D.C", "New York, New York", "Virginia", "New England"], cor: "New York, New York" },
    { q: "Which European explorer first discovered America?", a: ["John Smith", "Christopher Colombus", "Louis XIII", "The Vikings"], cor: "The Vikings" },
    { q: "When was the Declaration of Independence signed?", a: ["1774", "1775", "1776", "1777"], cor: "1776" },
    { q: "When did the American Civil War end?", a: ["April 9, 1865", "May 9, 1865", "July 19, 1869", "October 12, 1869"], cor: "May 9, 1865" },
    { q: "What was the deadliest single-day battle in American history?", a: ["The Battle of Antietam", "The storming of Normandy (D-Day)", "Oklahoma Massacre", "Battle of Alamo"], cor: "The Battle of Antietam" },
    { q: "What happened to the people in Salem who were convicted of witchcra0ft?", a: ["Burned at the stake", "Hanged at the gallows", "Drowned at Sea", "Imprisoned"], cor: "Hanged at the gallows" },
    { q: "Who invented the first car??", a: ["Karl Benz", "Henry Ford", "Enzo Ferrari", "Nicholas-Joseph Cugnot"], cor: "Karl Benz" },
    { q: "Who was the first to settle in what’s now the United States?", a: ["British", "French", "Dutch", "Spanish"], cor: "Spanish" },
    { q: "In what year was American Recognised as a Country?", a: ["1777", "1779", "1781", "1783"], cor: "1777" },
    { q: "Who was the first American president to appear on TV?", a: ["John F. Kennedy", " Grover Cleveland", "Theodore Roosevelt", "Abraham Lincoln"], cor: "Theodore Roosevelt" }
]

var questionsDiv = document.getElementById("questionsDiv");
var answersDiv = document.getElementById("answersDiv");
var startBtn = document.getElementById("startButton");
var choiceBtn1= document.getElementById("choice-1");
var choiceBtn2= document.getElementById("choice-2");
var choiceBtn3= document.getElementById("choice-3");
var choiceBtn4= document.getElementById("choice-4");
var answwerList = document.getElementById("listOptions")
var end = document.getElementById("endGame")
var results = document.getElementById("results");
var initials = document.getElementById("initialsId")
var user = document.getElementById("finish")
var timer = document.getElementById("timer")
var currentMQuestion = 0;
var userWin = 0
var userLose = 0
var timerId
var counter = questions.length * 5
// var saveUserdetails=JSON.parse(localStorage.getItem("showResults"))||[]
// $("#initialsId").on("click", function(event){
//     event.preventDefault();
//     console.log("dope")
// })

startBtn.onclick = startGame;
choiceBtn1.onclick = checkAnswer
choiceBtn2.onclick = checkAnswer
choiceBtn3.onclick = checkAnswer
choiceBtn4.onclick = checkAnswer
initials.onclick = saveUserdetails
answersDiv.style.display = "none";
questionsDiv.style.display = "none";
end.style.display = "none";

function displayClock(){
    timer.textContent = counter
    counter--
    if (counter<=0){
        displayResults()
    }

}


function startGame(){
    startBtn.style.display = "none";
    answersDiv.style.display = "block";
    questionsDiv.style.display   = "block";
    timerId = setInterval(displayClock,1000)
    displayQuestion()
}
function displayQuestion(){
   questionsDiv.textContent = questions[currentMQuestion].q
   choiceBtn1.textContent = questions[currentMQuestion].a[0]
     choiceBtn1.setAttribute("data-value",questions[currentMQuestion].a[0])
     choiceBtn1.setAttribute("data-answer",questions[currentMQuestion].cor)
 choiceBtn2.textContent = questions[currentMQuestion].a[1]
     choiceBtn2.setAttribute("data-value",questions[currentMQuestion].a[1])
     choiceBtn2.setAttribute("data-answer",questions[currentMQuestion].cor)
 choiceBtn3.textContent = questions[currentMQuestion].a[2]
     choiceBtn3.setAttribute("data-value",questions[currentMQuestion].a[2])
     choiceBtn3.setAttribute("data-answer",questions[currentMQuestion].cor)
 choiceBtn4.textContent = questions[currentMQuestion].a[3]
     choiceBtn4.setAttribute("data-value",questions[currentMQuestion].a[3])
     choiceBtn4.setAttribute("data-answer",questions[currentMQuestion].cor)

}
function checkAnswer(){
    console.log("button was click",this.getAttribute("data-value"))
    console.log("button was click",this.getAttribute("data-answer"))
    var userchoice = this.getAttribute("data-value")
    var rightAnswer = this.getAttribute("data-answer")
    if (userchoice === rightAnswer){
        userWin ++
        answwerList.textContent = "correct"
    }
    else{
        userLose++
        counter = counter - 5
        answwerList.textContent = "INCORRECT. The Right answer is  : "+rightAnswer
    }
    if(currentMQuestion<questions.length - 1){
        currentMQuestion++
        displayQuestion()
    }
    else{
        displayResults()
    }
}
function displayResults(){
    clearInterval(timerId)
    console.log(userWin,userLose)
    answersDiv.style.display = "none";
    questionsDiv.style.display = "none";
    end.style.display = "block";
    results.textContent = `Wins : ${userWin} Loss: ${userLose}`
}
// function getlocalstorage(){
//     console.log("button was click", this.getAttribute("initials"))
// }
// function saveUserdetails(){
//     console.log.setAttribute("")
// }