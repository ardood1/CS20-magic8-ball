// Magic 8 Ball

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get user's question
  let input = document.getElementById("input").value.toLowerCase();
  // Get and output the answer/response
  document.getElementById("output").innerHTML = getResponse(input);
}

/* test if the question the user asked is Empty String -> “Please ask a question…”
 “Does a magic 8 ball actually work?” -> “How dare you doubt me!”
 “Is JavaScript awesome?” -> “Of Course!”*/

function getResponse(question) {
  if (question === "is javascript awesome") {
    return "Of course";
  } else if (question === "does magic 8 ball really work?") {
    return "How dare you doubt me!";
  } else if (question === "") {
    return "Please enter a question";
  } else {
    return randomResponse();
  }
}

/* If the question does not match one of the specific questions, 
return a random response*/
function randomResponse() {
  let randNum = Math.random();
  if (randNum < 0.2) {
    return "Without a doubt";
  } else if (randNum < 0.4) {
    return "As I see it, yes";
  } else if (randNum < 0.6) {
    return "Concentrate and ask again";
  } else if (randNum < 0.8) {
    return "Don't count on it";
  } else {
    return "Outlook not so good";
  }
}
