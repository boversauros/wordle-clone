import React from "react";
import GuessForm from "./GuessForm";
import GuessList from "./GuessList";
import GuessResult from "./GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers"

// Pick a random word on every pageload.
const answer = sample(WORDS);


function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const lastGuess = guesses[guesses.length - 1];
  const isGameWon = lastGuess?.value.every(cell => cell.status === "correct");
  const isGameLost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !isGameWon;
  const isGameOver = isGameWon || isGameLost;

  function handleNewGuess(guess) {
    // If the game is over, we don't want to add more guesses.
    if (isGameOver) return;
    
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;

    const newGuess = {
      id: crypto.randomUUID(),
      value: checkGuess(guess, answer),
    };

    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessForm onNewGuess={handleNewGuess} />
      {isGameOver && (
        <GuessResult
          isGameWon={isGameWon}
          answer={answer}
          numberOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
