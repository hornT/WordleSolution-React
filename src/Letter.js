export default function Letter({ letter, isEditEnable, onClick }) {

  const className = 'letter-input ' + letter.Color;
  return (
    <div className="letter" onClick={() => onClick(letter)}>
      <input className={className} disabled={!isEditEnable} maxLength={1} value={letter.Char} onChange={(e) => {letter.Char = e.target.value}} />
    </div>
  );
}