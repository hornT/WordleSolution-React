import Letter from "./Letter";

export default function Word({ word, isEditEnable, onClick }) {

    const listItems = word.Letters.map((l, i) =>
        <Letter key={l.Id} letter={l} isEditEnable={isEditEnable} onClick={() => onClick(word, i)}/>
      );

      return (
        <div className="word">
            {listItems}
        </div>
    );
}