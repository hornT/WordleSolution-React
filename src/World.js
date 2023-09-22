import Letter from "./Letter";

export default function World({ world, isEditEnable, onClick }) {

    const listItems = world.Letters.map(l =>
        <Letter key={l} letter={l} onClick={onClick}/>
      );

      return (
        <div className="world">
            {listItems}
        </div>
        
    //   <div>
    //     for (const p of products) {
    //         <Product product={p} onClick={onClick}/>
    //     }
    //   </div>
    );

}