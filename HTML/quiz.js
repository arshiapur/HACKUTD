var resultR = 0;

var resultW = 0;

var qnsCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");

q1a1.addEventListener("click", wrong);
q1a2.addEventListener("click", right);

q2a1.addEventListener("click", right);
q2a2.addEventListener("click", wrong);

q3a1.addEventListener("click", wrong);
q3a2.addEventListener("click", right);

q4a1.addEventListener("click", wrong);
q4a2.addEventListener("click", right);

q5a1.addEventListener("click", right);
q5a2.addEventListener("click", wrong);

q6a1.addEventListener("click", wrong);
q6a2.addEventListener("click", right);

q7a1.addEventListener("click", right);
q7a2.addEventListener("click", wrong);

q8a1.addEventListener("click", right);
q8a2.addEventListener("click", wrong);

q9a1.addEventListener("click", wrong);
q9a2.addEventListener("click", right);


function wrong() {
  qnsCount = qnsCount + 1
  resultW += 1
  console.log ("qnsCount = " + qnsCount + " resultW = " + resultW)

if (qnsCount == 9) {
  console.log ("The quiz is done!")
  updateResult();
}
}


function right() {
  qnsCount += 1
  resultR += 1
  console.log ("qnsCount = " + qnsCount + " resultR = " + resultR);

  if (qnsCount == 9) {
  console.log ("The quiz is done!")
  updateResult();
}
}


// Import the confetti library (if using ES6 modules)
import confetti from 'confetti-js';

// Function to trigger confetti
function celebrate() {
    const confettiSettings = { target: 'confetti-container' };
    const confettiInstance = new confetti.ConfettiGenerator(confettiSettings);
    
    confettiInstance.render();
    
    // Stop the confetti after a few seconds (e.g., 10 seconds)
    setTimeout(() => {
        confettiInstance.clear();
    }, 10000);
}

function updateResult() {
  if (resultW == 0){
    result.innerHTML = "Congratulations, you are a financial expert, you know your stuff! Keep continuing to learn about managing your money!"
    console.log("You know your stuff! Keep learning about managing your money and you're well on your way to being financially smart!");
  }
  else if (resultW > 0 && resultW <=3) {
    result.innerHTML = "You know your stuff! You're very financially smart but keep learning about managing your money!"
  console.log("You know your stuff! Keep learning about managing your money and you're well on your way to being financially smart!");
}
else if (resultW >= 4 && resultW <= 6) {
  result.innerHTML = "You're knowlegeable in some topics, but could continue to learn more to manage your money more efficiently. Keep learning!"
  console.log("You ");
}
else if (resultW >= 7 && resultW <= 9){
    result.innerHTML = "You are still on the beginning of your journey in financial literacy, continue learning to grow financially start! "
    console.log("You ");
    celebrate();
}
}


