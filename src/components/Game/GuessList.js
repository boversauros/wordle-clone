function GuessList({ guesses }) {
  let filledArray = [...guesses];

  while (filledArray.length < 5) {
    filledArray.push({ id: crypto.randomUUID(), value: "" });
  }

  return (
    <div className="guess-results">
      {filledArray.map(({ id, value }) => (
        <p className="guess" key={id}>
          <span className="cell">{value[0]}</span>
          <span className="cell">{value[1]}</span>
          <span className="cell">{value[2]}</span>
          <span className="cell">{value[3]}</span>
          <span className="cell">{value[4]}</span>
        </p>
      ))}
    </div>
  );
}

export default GuessList;
