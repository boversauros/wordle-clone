function GuessResult({ isGameWon, answer, numberOfGuesses }) {
  const classResult = isGameWon ? "happy banner" : "sad banner";

  return (
    <div className={classResult}>
      <p>
        {isGameWon ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numberOfGuesses} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default GuessResult;