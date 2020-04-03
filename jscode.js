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
var currentMQuestion = 0;

startBtn.onclick = startGame;
choiceBtn1.onclick = optionOne
answersDiv.style.display = "none";
questionsDiv.style.display = "none";




function startGame(){
    startBtn.style.display = "none";
    answersDiv.style.display = "block";
    questionsDiv.style.display   = "block";
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
function optionOne(){
    console.log("button was click",this.getAttribute("data-value"))
    console.log("button was click",this.getAttribute("data-answer"))
}