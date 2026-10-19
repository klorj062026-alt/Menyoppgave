// recieves an array from App.jsx called Menu
// Maps through each place and renders a Dish for each place
// passes an object to Dish on each pass of map

import Dish from "./Dish";

const menyrOrder = ["Forrett", "Hovedrett", "Dessert"];

export default function menu(props) {
  return (
    <>
      <div className="menu">
        <h1>Meny</h1>

        {menyrOrder.map((kategori) => (
          <div key={kategori} className="kategori-seksjon">
            <h2>{kategori}</h2>

            <div className="meny-wrapper">
              {props.meny
                .filter((item) => item.kategori === kategori)
                .map((item) => (
                  <Dish key={item.id} {...item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
