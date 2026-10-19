// Recieves props, and renders them
// prop keys are "tittel", "pris", ingedienser, kategori

import "./Dish.css";

export default function Dish({ tittel, ingredienser, pris, kategori }) {
  return (
    <>
      <div className="dish-container">
        <h3 className="dish-navn">{tittel}</h3>
        <p className="dish-pris">{pris}</p>
        <p className="dish-ingredienser">{ingredienser}</p>
        <p className="dish-kategori">{kategori}</p>
      </div>
    </>
  );
}
