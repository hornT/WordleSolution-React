import World from "./World";

export default function WorldList({ worlds, onClick }) {

    const listItems = worlds.map(w =>
        <World key={w.Id} world={w} isEditEnable={false} onClick={onClick}/>
      );

      return (
        <div className="worlds">
            {listItems}
        </div>
        
    //   <div>
    //     for (const p of products) {
    //         <Product product={p} onClick={onClick}/>
    //     }
    //   </div>
    );

}