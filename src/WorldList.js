import World from "./World";

export default function WorldList({ worlds, onClick }) {

    const listItems = worlds.map((w, i) =>
        <World key={w.Id} world={w} isEditEnable={false} onClick={i === worlds.lenght - 1 ? onClick : () => {}}/>
      );

      return (
        <div className="worlds">
            {listItems}
        </div>
    );
}