const EMPTY_ANSWER =  [
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
  ];

function GuessList({ guesses }) {
  let filledArray = [...guesses];

  while (filledArray.length < 5) {
    filledArray.push({id: crypto.randomUUID(), value: EMPTY_ANSWER});
  }

  return (
    <div className="guess-results">
      {filledArray.map(({ id, value }) => (
        <p className="guess" key={id}>
          <span className={`cell ${value[0].status}`}>{value[0].letter}</span>
          <span className={`cell ${value[1].status}`}>{value[1].letter}</span>
          <span className={`cell ${value[2].status}`}>{value[2].letter}</span>
          <span className={`cell ${value[3].status}`}>{value[3].letter}</span>
          <span className={`cell ${value[4].status}`}>{value[4].letter}</span>
        </p>
      ))}
    </div>
  );
}

export default GuessList;
