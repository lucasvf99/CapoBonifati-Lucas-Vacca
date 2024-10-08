import { Link } from "react-router-dom";
import "../../App.css"
import './item.css'
import ItemCount from "../itemCount/ItemCount";

function Item({ producto }) {
  return (
    <div className="cont__rick"   >
      <img src={producto.image} alt="" className="cont__rick__img" />
      <div className="cont__rick__info">
        <p>{producto.name}</p> 
        <p>Precio: {producto.price} $</p>  
        <Link to={`/character/${producto.id}`} ><button>Ver mas</button> </Link> {/**ruta dinamica */}
        <ItemCount item={producto}/>
      </div>
    </div>
  );
}

export default Item;
