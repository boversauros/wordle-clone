import React from "react";
import GuessForm from "./GuessForm";
import GuessList from "./GuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    // handle this later
    if (guesses.length >= 5) return;

    const newGuess = {
      id: crypto.randomUUID(),
      value: guess,
    };

    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessForm onNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
