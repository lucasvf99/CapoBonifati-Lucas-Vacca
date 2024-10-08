import './form.css'
import { useContext} from 'react'
import { cartContext } from '../../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { setOrder } from '../../firebase/db'
import { useNavigate } from 'react-router-dom'
// sweetAlert 
import Swal from "sweetalert2";

function Formulario() {

  const {cart,getTotal,setCart} = useContext(cartContext)
  const datosCart = []
  const urlHome = useNavigate()

     cart.map(el =>{
      datosCart.push({
          name: el.name,
          price: el.price,
          cantidad: el.cantidad
      })
    })

    

    const sweetAlert = (id) => {
      Swal.fire({
        title: "Compra Exitosa!",
        text:"ID de la compra n°" + id,
        background:'#f6be6a;',
      }).then((result) => {
        if(result.isConfirmed){
          urlHome('/')
        }
      });
    }

    const handleSubmit =(e) => {  
      e.preventDefault()

      let email = e.target.email.value
      let phone = e.target.phone.value
      let name = e.target.name.value  
      
      const  order =  {
        buyer: {name,email,phone},
        items: datosCart,
        date: serverTimestamp(),
        total:  getTotal()
      }
      setCart([])
      setOrder(order)
      .then(function(res){
        sweetAlert(res ) 
      })

      }

      

  return (
   
    <form  className="formulario" onSubmit={handleSubmit}>
    <fieldset>
        <legend>Contactanos llenando los campos</legend>

        <div className="contenedor-campos">
            <div className="campo">
                <label >Nombre</label>
                <input type="text" className="input-text" placeholder="Tu Nombre" id='name' required/>
            </div>

            <div className="campo">
                <label >Telefono</label>
                <input  className="input-text" type="tel" placeholder="Tu Telefono" id='phone' required/>
            </div>

            <div className="campo">
                <label >Correo</label>
                <input className="input-text"  type="email" placeholder="Tu Email" id='email' required/>
            </div>

        </div>
            <div className="alinear-derecha flex ">
               <input className="boton" type="submit" value="Enviar"/>
            </div>
    </fieldset>
</form>
  )
}

export default Formulario;