import { useState } from 'react'
import {cartContext} from '../cartContext'
// sweetAlert 
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function CartProvider ({children}) {
    const [cart, setCart]= useState ([])
    
    const prodDuplicado = (item) => cart.find((e) => e.id == item.id) 
    

    const agregarItem = (item) =>{
        const MySwal = withReactContent(Swal);
       if(prodDuplicado(item)){
        Swal.fire({
            title: "El producto ya esta en el carrito ",
            icon: "warning",
          })
        return
       } 
       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado",
      });
        setCart([...cart,item])
    } 

    const   eliminarProducto = (id ) =>  {
        const productoIndice = cart.findIndex(el => el.id == id )
        cart.splice(productoIndice,1) 
        setCart( [...cart])
        console.log(cart)
      }

    const getTotal = () => {
        const totalCarrito = cart.map(el => el.price * el.cantidad)
       let  total = '€' + totalCarrito.reduce((total, producto) =>  total + producto , 0)
        return  total
   }


    return(
        <cartContext.Provider value={{cart, agregarItem, eliminarProducto, getTotal, setCart}}>
             {/* se puede enviar mas de un parametro, pasandolo como objeto {{}} */}
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider