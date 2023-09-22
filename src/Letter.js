export default function Letter({ letter, onClick }) {
    return (
      <div className="letter" onClick={() => onClick(letter)}>
        <h2>{letter.char}</h2>
      </div>
    );
  }