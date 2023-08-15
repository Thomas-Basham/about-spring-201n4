"use strict";
let userScore = 0;

function yesOrNoPrompt(
  question,
  correctAnswer,
  successMessage,
  failureMessage
) {
  let questionPrompt = prompt(question).toLocaleLowerCase();
  if (questionPrompt === correctAnswer) {
    alert(successMessage);
    userScore++;
  } else {
    alert(failureMessage);
  }
}

let playGame = confirm("Do you want to play a game?");

if (playGame) {
  let username = prompt("What is your name?");
  console.log("User's name", username);

  yesOrNoPrompt(
    "Does Thomas like fishing?",
    "yes",
    "That's correct. Thomas loves fishing!",
    "That's wrong. Fishing is life."
  );

  yesOrNoPrompt(
    "Does Ari like art?",
    "yes",
    "Yes! Ari is an artist.",
    "Wrong! Ari is in fact an artist."
  );

  yesOrNoPrompt(
    "Does Khari like trucks?",
    "no",
    "That's right, Khari likes cars more.",
    "Thats wrong, Khari likes cars"
  );

  let correctAnswer = 7;
  let userGuess;

  while (correctAnswer !== userGuess) {
    userGuess = prompt("guess a number between 1 and 10");
    userGuess = parseInt(userGuess);

    if (userGuess < correctAnswer) {
      alert("Too low!");
    } else if (userGuess > correctAnswer) {
      alert("Too high.");
    } else if (userGuess === correctAnswer) {
      alert("That's right! The answer was " + correctAnswer);
      userScore++;
    }
  }

  let interestsArray = [
    "art",
    "cars",
    "coding",
    "video games",
    "cooking",
    "reading",
    "baseball",
    "soccer",
  ];
  let attempts = 3;

  hasAttempts: while (attempts !== 0) {
    attempts--;
    userGuess = prompt("Can you guess one of our class's interests?");

    for (let i = 0; i < interestsArray.length; i++) {
      if (userGuess === interestsArray[i]) {
        alert("Yep! " + interestsArray[i] + " is on the list.");
        break hasAttempts;
      }
    }

    alert("Wrong, Try again! You have " + attempts + " attempts left.");

    if (!attempts) {
      alert(
        "You're out of attempts. The correct answers are: " +
          interestsArray.toString()
      );
    }
  }

  alert("Great job! Your score is " + userScore);
}
