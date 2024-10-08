import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./carrito.css";
import CarritoItems from "../carrito Items/CarritoItems";
// sweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'sweetalert2/src/sweetalert2.scss'



function Carrito() {
  const { cart } = useContext(cartContext); 
  const urlCheckout = useNavigate()

  const mostrarCarrito = () => {
    if (cart.length == 0) {
      return <h1>El carrito esta Vacio</h1>;
    } else {
      return cart.map((el) => <CarritoItems items={el} key={el.id} />);
    }
  };

  
  const carritoVacio = (e) => {
      if(cart.length == 0){

        const MySwal = withReactContent(Swal);

        MySwal.fire({
          title: 'Carrito Vacio',
          icon: 'warning',
        },
      )
      
      }else{
      urlCheckout('/checkout')
      }
  }

  return (
    <>
      <div className="carrito">
        <div className="carritoItems">
          {mostrarCarrito()}
        </div>
        <div className="bx">
           <button className="bx__boton" onClick={carritoVacio} >Terminar Compra </button>
        </div>
      </div>
    </>
  );
}

export default Carrito;
