function GuessList({ guesses }) {
  let filledArray = [...guesses];

  while (filledArray.length < 5) {
    filledArray.push({ id: crypto.randomUUID(), value: "" });
  }

  console.info({ filledArray });

  return (
    <div className="guess-results">
      {filledArray.map((guess) => (
        <p className="guess" key={guess.id}>
          <span className="cell">{guess.value[0]}</span>
          <span className="cell">{guess.value[1]}</span>
          <span className="cell">{guess.value[2]}</span>
          <span className="cell">{guess.value[3]}</span>
          <span className="cell">{guess.value[4]}</span>
        </p>
      ))}
    </div>
  );
}

export default GuessList;
