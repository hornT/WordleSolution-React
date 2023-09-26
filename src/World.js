import Letter from "./Letter";

export default function World({ world, isEditEnable, onClick }) {

    const listItems = world.Letters.map(l =>
        <Letter key={l.Id} letter={l} isEditEnable={isEditEnable} onClick={onClick}/>
      );

      return (
        <div className="world">
            {listItems}
        </div>
    );
}