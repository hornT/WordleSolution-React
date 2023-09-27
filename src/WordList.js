import Word from "./Word";

export default function WordList({ words, onClick }) {

    const listItems = words.map((w, i) =>
        <Word key={w.Id} word={w} isEditEnable={false} onClick={onClick}/>
      );

      return (
        <div className="words">
            {listItems}
        </div>
    );
}