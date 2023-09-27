export default function SuggestionList({ words }) {

    const listItems = words.map((w, i) =>
        <div key={w}>{w}</div>
      );

      return (
        <div className="suggestion-list">
            {listItems}
        </div>
    );
}