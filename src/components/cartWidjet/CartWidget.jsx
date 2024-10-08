import "./cartWidjet.css";
import "../../App.css";
import { cartContext } from "../../context/cartContext";
import { useContext} from "react";
import { Link } from "react-router-dom";


function CartWidget() {

  

  const { cart } = useContext(cartContext);

  return (
    <Link to='/carrito'>
      <div id="carrito" >
        <i className="bx bx-shopping-bag"></i>
        <p>{cart.length}</p>
        <div id="carrito__products">

        </div>
      </div>
    </Link>
  );
}

export default CartWidget;
