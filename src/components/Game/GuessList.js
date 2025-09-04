import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
const EMPTY_ANSWER =  Array(5).fill({ letter: "", status: null });

function GuessRow({ guessId, guessValue }) {
  return (
    <p className="guess">
      {guessValue.map(({ letter, status }, index) => {        
        const statusClass = status ? `cell ${status}` : "cell";

        return (
          <span key={`${guessId}-${index}`} className={statusClass}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

function GuessList({ guesses }) {
  let filledArray = [...guesses];

  while (filledArray.length < NUM_OF_GUESSES_ALLOWED) {
    filledArray.push({id: crypto.randomUUID(), value: EMPTY_ANSWER});
  }

  return (
    <div className="guess-results">
      {filledArray.map(({ id, value }) => (
        <GuessRow key={id} guessId={id} guessValue={value} />
      ))}
    </div>
  );
}

export default GuessList;
