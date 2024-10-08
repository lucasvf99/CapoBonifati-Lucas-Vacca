import "./carritoItems.css";
import {  useContext } from "react";
import { cartContext} from "../../context/cartContext";

function CarritoItems({ items }) {

  const {eliminarProducto} = useContext(cartContext)

  const eliminarItem = () => eliminarProducto(items.id)

  return (
    <div className="carrito__cont">
      <button className="boton__carrito" onClick={eliminarItem}>❌</button>
      <div className="carrito__cont__image">
        <img src={items.image} alt="" />
      </div>
      <div>
        <p>{items.name}</p>
      </div>
      <div>
        <p> € {items.price}</p>
      </div>
    </div>
  );
}

export default CarritoItems;
